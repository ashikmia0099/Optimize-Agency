"use client"

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../lib/firebase";

const { createContext, useState, useEffect, useContext } = require("react")


const provider = new GoogleAuthProvider();

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

    const [user, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [blogallcategory, setblogallcategory] = useState([]);
    const [allblogs, setblogs] = useState([])
    const [allCategoryService, setallCategoryService] = useState([])
    const [allServiceName, setServiceName] = useState([])
    const [AllprocessData, setAllprocessData] = useState([])
    const [Allprocesstitletext, setAllprocesstitletext] = useState([])
    const [aboutalldata, setaboutalldata] = useState([])
    const [careerAllcategory, setcareerAllcategory] = useState([])


    // process state

    const [processtitletext, setprocesstitletext] = useState([])
    const [processData, setprocessData] = useState([])

    // About state

    const [aboutBannerdata, setaboutBannerdata] = useState([])
    const [aboutData, setaboutData] = useState([])


    // career state

    const [careeerFirsttitle, setcareeerFirsttitle] = useState([])
    const [careeerSeciondtitle, setcareeerSeciondtitle] = useState([])
    const [careeerfirstdata, setcareeerfirstdata] = useState([])
    const [careeercategory, setcareeercategory] = useState([])
    const [careeerSeconddata, setcareeerSeconddata] = useState([])


    // service state

    const [servicallcategory, setservicallcategory] = useState([])
    const [servicallName, setservicallName] = useState([])
    const [servicallData, setservicallData] = useState([])


    // work state

    const [workalltitle, setworkalltitle] = useState([])
    const [workalldata, setworkalldata] = useState([])


    // shared footer hero state

    const [sharedfooterherodata, setsharedfooterherodata] = useState([])


    // frequintly question state

    const [questionData, setquestionData] = useState([])


    // contact us state

    const [contactUsMeium, setcontactUsMeium] = useState([])

    // office oppening day state

    const [oppeningday, setoppeningday] = useState([])


    // contact medium link state

    const [contactmediumlink, setcontactmediumlink] = useState([])




    // Blogpage   state

    const [Sec_1_Big_Banner_Post_Form, setSec_1_Big_Banner_Post_Form] = useState([])
    const [Sec_1_2_half_Banner_Post_Form, setSec_1_2_half_Banner_Post_Form] = useState([])
    const [Sec_2_half_Banner_Post_Form, setSec_2_half_Banner_Post_Form] = useState([])
    const [Sec_3_Card_Post_Form, setSec_3_Card_Post_Form] = useState([])
    const [Sec_4_Card_Auto_Post_api, setSec_4_Card_Auto_Post_api] = useState([])
    const [Sec_5_Single__half_Banner_Post_api, setSec_5_Single__half_Banner_Post_api] = useState([])
    const [Sec_6_Signgle_Half_Banner_Post_api, setSec_6_Signgle_Half_Banner_Post_api] = useState([])
    const [Right_Sec_1_Image_Post_api, setRight_Sec_1_Image_Post_api] = useState([])
    const [Right_Sec_1_List_Post_api, setRight_Sec_1_List_Post_api] = useState([])
    const [Right_Sec_1_Second_List_Post_api, setRight_Sec_1_Second_List_Post_api] = useState([])
    const [Right_Sec_2_First_Image_Post_api, setRight_Sec_2_First_Image_Post_api] = useState([])
    const [Right_Sec_2_Image_Second_Post_api, setRight_Sec_2_Image_Second_Post_api] = useState([])
    const [Right_Sec_2_List_Post_Form, setRight_Sec_2_List_Post_Form] = useState([])
    








    // fetch all blog category

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/blogsapi/blogCategoryApi")
            .then(res => res.json())
            .then(data => {
                setblogallcategory(data)

            })


    }, [])


    // fetch all blog post api

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/blogsapi/BlogPostapi")
            .then(res => res.json())
            .then(data => {
                setblogs(data)

            })


    }, [])


    // fetch all Service Category api 

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/sarviceapi/ServiceAllCategoryForm")
            .then(res => res.json())
            .then(data => {
                setallCategoryService(data)

            })


    }, [])


    // fetch all Service name api 

    useEffect(() => {

        fetch("https://optimize-agency.vercel.app/api/sarviceapi/AllServiceNameForm")
            .then(res => res.json())
            .then(data => {
                setServiceName(data)

            })


    }, [])






    // create user with email and password

    const handleSignUpWithEamil = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // sign in with email

    const handleSignInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out 

    const handleSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // sign in with google


    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    // user profile update

    const UserProfileUpdate = (updatedDate) => {
        return updateProfile(auth.currentUser, updatedDate)
    }


    // email verficication check



    const userInfo = {
        user, setUsers,
        loading, setLoading,
        handleSignUpWithEamil,
        handleSignInWithEmail,
        handleSignOut,
        handleGoogleSignIn,
        UserProfileUpdate,
        blogallcategory,
        setblogallcategory,
        allblogs, setblogs,
        allCategoryService, setallCategoryService,
        allServiceName, setServiceName,
        AllprocessData, setAllprocessData,
        Allprocesstitletext, setAllprocesstitletext,
        aboutalldata, setaboutalldata,
        careerAllcategory, setcareerAllcategory,

        // process state
        processtitletext, setprocesstitletext,
        processData, setprocessData,

        // about state
        aboutBannerdata, setaboutBannerdata,
        aboutData, setaboutData,


        // career state

        careeerFirsttitle, setcareeerFirsttitle,
        careeerSeciondtitle, setcareeerSeciondtitle,
        careeerfirstdata, setcareeerfirstdata,
        careeercategory, setcareeercategory,
        careeerSeconddata, setcareeerSeconddata,


        // service state

        servicallcategory, setservicallcategory,
        servicallName, setservicallName,
        servicallData, setservicallData,


        // work state

        workalltitle, setworkalltitle,
        workalldata, setworkalldata,


        // shared footer hero state

        sharedfooterherodata, setsharedfooterherodata,


        // frequintly question state

        questionData, setquestionData,

        // contact us medium
        contactUsMeium, setcontactUsMeium,

        // office oppening day state

        oppeningday, setoppeningday,

        // set contact medium state

        contactmediumlink, setcontactmediumlink,


        // blog api

        Sec_1_Big_Banner_Post_Form, setSec_1_Big_Banner_Post_Form,
        Sec_1_2_half_Banner_Post_Form, setSec_1_2_half_Banner_Post_Form,
        Sec_2_half_Banner_Post_Form, setSec_2_half_Banner_Post_Form,
        Sec_3_Card_Post_Form, setSec_3_Card_Post_Form,
        Sec_4_Card_Auto_Post_api, setSec_4_Card_Auto_Post_api,
        Sec_5_Single__half_Banner_Post_api, setSec_5_Single__half_Banner_Post_api,
        Sec_6_Signgle_Half_Banner_Post_api, setSec_6_Signgle_Half_Banner_Post_api,
        Right_Sec_1_Image_Post_api, setRight_Sec_1_Image_Post_api,
        Right_Sec_1_List_Post_api, setRight_Sec_1_List_Post_api,
        Right_Sec_1_Second_List_Post_api, setRight_Sec_1_Second_List_Post_api,
        Right_Sec_2_First_Image_Post_api, setRight_Sec_2_First_Image_Post_api,
        Right_Sec_2_Image_Second_Post_api, setRight_Sec_2_Image_Second_Post_api,
        Right_Sec_2_List_Post_Form, setRight_Sec_2_List_Post_Form,
        



    }




    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            if (currentuser && currentuser.emailVerified) {
                setUsers(currentuser);

            } else {
                setUsers(null);
            }
            setLoading(false)
        })
        return () => unsubscribe()


    }, [])







    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)