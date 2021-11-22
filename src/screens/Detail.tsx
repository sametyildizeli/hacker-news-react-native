import React, { FC, useEffect, useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../abstracts/RootState";
import { getUserById } from "../redux/user/action";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Linking
} from 'react-native';
import Loading from "../components/Loading/Loading";
import { loading } from "../redux/loading/action";

const Section: FC<{
    title: string;
}> = ({ children, title }) => {
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const Detail: FC<{ navigation: StackNavigationProp<any, any>, route: any }> = ({ navigation, route }) => {

    const { story } = route.params;
    const dispatch = useDispatch();

    const { userObject } = useSelector((state: RootState) => state.user)
    const { loadingState } = useSelector((state: RootState) => state.loading);

    useEffect(() => {
        dispatch(loading(true))
        dispatch(getUserById(story.by));
        dispatch(loading(false))
    }, [])


    return (
        <SafeAreaView style={styles.safeArea}>
            {loadingState
                ?
                <Loading block={loadingState} />
                :
                <ScrollView
                    style={styles.scrollStyle}

                    contentInsetAdjustmentBehavior="automatic">
                    <View style={styles.headerView}>
                        <Text style={styles.headerText}>
                            {story.title}
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: Colors.white,
                        }}>
                        <Section title="Story Timestamp">
                            <Text style={styles.highlight}>{story.time}</Text>
                        </Section>
                        <Section title="Story Url">
                            {
                                story?.url !== undefined ?
                                    <TouchableOpacity onPress={() => Linking.openURL(story.url)}>
                                        <Text style={styles.highlight}>{`Click for the link`}</Text>
                                    </TouchableOpacity>
                                    :
                                    <Text style={styles.highlight}>{`URL doesn't exist`}</Text>
                            }
                        </Section>
                        <Section title="Author Id">
                            <Text style={styles.highlight}>{userObject.id}</Text>
                        </Section>
                        <Section title="Author Karma Score">
                            <Text style={styles.highlight}>{userObject.karma}</Text>
                        </Section>
                    </View>
                </ScrollView>
            }
        </SafeAreaView>
    )
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    scrollStyle: {
        padding: 20,
        width: "100%"
    },
    safeArea: {
        backgroundColor: "#d1d3e0"
    },
    headerText: {
        fontWeight: '700',
        fontSize: 35,
        textAlign: 'center',
        color: "#d1d3e0",
        padding: 10
    },
    headerView: {
        height: 250,
        backgroundColor: '#131736',
        alignItems: 'center',
        justifyContent: 'center'
    }
});