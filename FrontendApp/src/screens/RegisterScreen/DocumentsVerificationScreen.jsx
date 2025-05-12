import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Alert,
    Image,
    ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ProfessionalDocumentsScreen from './ProfessionalDocumentsScreen';
import CustomCard from '../../components/CardUpload';

const DocumentsVerification = ({ navigation }) => {
    const [aadhaar, setAadhaar] = useState(null);
    const [pan, setPan] = useState(null);
    const [selfie, setSelfie] = useState(null);

    const handleUpload = async (type) => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permission Required", "You need to grant camera roll permission.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            if (type === 'aadhaar') setAadhaar(uri);
            if (type === 'pan') setPan(uri);
            if (type === 'selfie') setSelfie(uri);
        }
    };

    const isNextEnabled = aadhaar && pan && selfie;

    return (
        <SafeAreaView style={styles.container}> 

            <View style={styles.headerLine} />
            <Text style={styles.appTitle}>ZAP</Text>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
             <CustomCard
                type="aadhaar"
                label="Aadhaar Number "
                placeholder="Enter Aadhaar Number"
                imageUri={aadhaar}  
                onUpload={() => handleUpload('aadhaar')}
            />
            <CustomCard
                type="pan"
                label="PAN Number"
                placeholder="Enter PAN Number"
                imageUri={pan}
                onUpload={() => handleUpload('pan')}
            />
            <CustomCard
                type="selfie"
                label="Selfie"
                placeholder="Take Selfie"
                imageUri={selfie}
                onUpload={() => handleUpload('selfie')} 
            />
            </ScrollView>

            {/* Next Button (Outside ScrollView) */}
            <TouchableOpacity
                onPress={() => navigation.navigate("ProfessionalDocumentsScreen")}
                style={[styles.nextButton, isNextEnabled && styles.nextButtonEnabled]}
                disabled={!isNextEnabled}
            >
                <Text style={[styles.nextButtonText, isNextEnabled && styles.nextButtonTextEnabled]}>
                    Next
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    statusBar: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },
    statusBarText: {
        fontSize: 12,
    },
    statusBarIcons: {
        flexDirection: 'row',
        gap: 4,
    },
    headerLine: {
        height: 3,
        backgroundColor: '#6200ee',
        width: '30%',
    },
    scrollContainer: {
        flex: 1,
    }, appTitle: { fontSize: 24, color: '#6200ee', textAlign: 'center', marginVertical: 10, fontWeight: 'bold' },

    card: {
        margin: 16,
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    section: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 4,
        padding: 12,
        marginBottom: 8,
    },
    uploadButton: {
        backgroundColor: '#6200ee',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '500',
    },
    nextButton: {
        backgroundColor: '#F0F0F0',
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
        margin: 16,
    },
    nextButtonEnabled: {
        backgroundColor: '#6200ee',
    },
    nextButtonText: {
        color: '#666666',
        fontSize: 16,
        fontWeight: '500',
    },
    nextButtonTextEnabled: {
        color: '#FFFFFF',
    },
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginTop: 8,
    },
});

export default DocumentsVerification;
