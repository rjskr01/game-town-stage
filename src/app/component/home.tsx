'use client'

import { sendMailVerification } from "@/firebase/sendMailVerification";
import stateItems from "../data/state-items";

import { register } from "@/firebase/register";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { addUser, getUser } from "@/firebase/user.services";

import { auth } from "@/firebase/initFirebase";
import { showNotificationPopup } from "@/redux/features/game-container-visibility-slices";
import { DocumentData } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { wrap } from "module";
import Avatar from "./avatar";
import { getImageUrl, uploadImage } from "@/firebase/profilePicture.services";

export interface IHomeContainer {
    isExistingMember: boolean
}

export interface UserType {
    email: string,
    password: string
}


export interface FormState {
   firstName: string,
   lastName: string,
   email: string,
   confirmEmail: string,
   gamerName: string,
   city: string,
   country: string,
   state: string,
   birthYear: number,
   sex: string,
   isTermsAndConditionsVerified: boolean,
   canDoEmailContact: boolean,
   canShowOnlyGamerInformation: boolean,
   memberShip: string,
   psw: string ,
   psw_repeat: string,
   uid: string
}

interface FormError {
    firstName: string,
    lastName: string,
    email: string,
    gamerName: string,
    city: string,
    country: string,
    state: string,
    birthYear: string,
    sex: string,
    isTermsAndConditionsVerified: string,
    psw: string
}

const HomeContainer: React.FC<IHomeContainer> = ({ isExistingMember }) => {

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged( async user => {
            if(user) {
                let userData: DocumentData | null = await getUser(user.uid);
                if(userData) {
                    for(const key in userData) {
                        if(key!== 'uid') {
                            let data = userData[key as keyof typeof userData];
                            if(data!=="") {
                                let inputElement: HTMLInputElement = document.querySelector(`input#${key}`) as HTMLInputElement;
    
                                if(inputElement && inputElement.type !== "checkbox") {
                                    inputElement.value = data;
                                } else {
                                    
                                    if(key === "state" || key === "sex")  {
                                        let selectElement: HTMLSelectElement = document.querySelector(`select#${key}`) as HTMLSelectElement;
                                        if(selectElement) {
                                            for (var i = 0; i < selectElement.options.length; i++) {
                                                if (selectElement.options[i].value === data) {
                                                  selectElement.selectedIndex = i;
                                                  break;
                                                }
                                            }
                                        }
                                    } else  if(key === "canShowOnlyGamerInformation") {
                                        let element = null;
                                        if(data === true) {
                                            element = document.querySelector(`input#expose_player_yes`) as HTMLInputElement;
                                            element.checked = true;
                                            element = document.querySelector(`input#expose_player_no`) as HTMLInputElement;
                                            element.checked = false;
                                        } else {
                                            element = document.querySelector(`input#expose_player_yes`) as HTMLInputElement;
                                            element.checked = false;
                                            element = document.querySelector(`input#expose_player_no`) as HTMLInputElement;
                                            element.checked = false;
                                        }
    
                                    } else if(key === "canDoEmailContact") {
    
                                        let element = null;
                                        if(data === true) {
                                            element = document.querySelector(`input#contact_player_yes`) as HTMLInputElement;
                                            element.checked = true;
                                            element = document.querySelector(`input#contact_player_no`) as HTMLInputElement;
                                            element.checked = false;
                                        } else {
                                            element = document.querySelector(`input#contact_player_yes`) as HTMLInputElement;
                                            element.checked = false;
                                            element = document.querySelector(`input#contact_player_no`) as HTMLInputElement;
                                            element.checked = false;
                                        }
                                        
                                    } else if(key === "isTermsAndConditionsVerified") {
                                        let element = document.querySelector(`input#${key}`) as HTMLInputElement;
                                        element && (element.checked = data === true ? true : false);
    
                                    } else if (key === "memberShip") {
                                        let element = null;
                                        if(data === "") {
                                            element = document.querySelector(`input#freeMember`) as HTMLInputElement;
                                            element && (element.checked = true);
                                            element = document.querySelector(`input#annualMember`) as HTMLInputElement;
                                            element && (element.checked = false);
                                            element = document.querySelector(`input#monthlyMember`) as HTMLInputElement;
                                            element && (element.checked = false);
                                        }
                                    }
                                    
                                 }
                            }
                        }
                    }
                }
                let url = await getImageUrl();
                setProfileUrl(url);
                console.log(userData);
            }  else {
                console.log("User is signed out");
            }
        });
    },[])

    const mailInputRef = useRef<HTMLInputElement>(null);
    const [emailValidationMessage, setEmailValidationMessage] = useState<string>('');
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [profileUrl, setProfileUrl] = useState<string> ('');
    const [formData, setFormData] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        gamerName: "",
        city: "",
        country: "",
        state: "NV",
        birthYear: 0,
        sex: "",
        isTermsAndConditionsVerified: false,
        canDoEmailContact: true,
        canShowOnlyGamerInformation: true,
        memberShip: "free",
        psw: "",
        psw_repeat: "",
        uid: ""
    });

    const [formError,  setFormError] = useState<FormError>({
        firstName: "First Name is required",
        lastName: "Last Name is required",
        email: "Email is required",
        psw: "Password required",
        gamerName: "Gamer name is required",
        city: "City name is required",
        country: "Country is required",
        state: "",
        birthYear: "birth Year is required",
        sex: "sex is required.",
        isTermsAndConditionsVerified: "Is must read and confirm terms and conditions",
    });

    const dispatch = useDispatch<AppDispatch>();

    const [memberShip, setMemberShip] = useState<string>('free');
    const [canShowOnlyGamerInformation, setCanShowOnlyGamerInformation] = useState<string>('yes');
    const [canDoEmailContact, setCanDoEmailContact] = useState<string>('yes');
    const [upgradeMemberShip, setUpgradeMemberShip] = useState<string>('annual');


    useEffect(()=> {
        if(emailValidationMessage !== '') {
            let inputElement:HTMLInputElement = document.querySelector('input#email') as HTMLInputElement;
            inputElement.setCustomValidity(emailValidationMessage);
            inputElement.reportValidity();
            setEmailValidationMessage('');
        }
    }, [emailValidationMessage]);




    const joinBtnClick = ()=> {
        let isValidData = true;
        if(formData) {
            let email = formData.email;
            let psw = formData.psw;

            for(const key in formError) {
                let error = formError[key as keyof typeof formError];
                if(error!=="") {
                    let inputElement: HTMLInputElement | HTMLSelectElement = document.querySelector(`input#${key}`) as HTMLInputElement;
                    if(inputElement == null) {
                        inputElement = document.querySelector(`select#${key}`) as HTMLSelectElement;
                    }
                    if(inputElement) {
                        inputElement.setCustomValidity(error);
                        inputElement.reportValidity();
                        isValidData = false;
                        break;
                    }
                }
            }

            if(email !== formData.confirmEmail) {
                let inputElement: HTMLInputElement = document.querySelector('input#confirmEmail') as HTMLInputElement;
                inputElement.setCustomValidity("Both Email and Confirm Email are mismatch.");
                inputElement.reportValidity();
                isValidData = false;
            }
          
            if(psw !== formData.psw_repeat) {
                let inputElement: HTMLInputElement = document.querySelector('input#psw_repeat') as HTMLInputElement;
                inputElement.setCustomValidity("Both password and confirm password are mismatch.");
                inputElement.reportValidity();
                isValidData = false;
            }

            if(isValidData) {
                const result = register(email, psw);
                
                result.then((currentUser ) => {
                    const user = currentUser.user;
                    console.log("User registration was completed successfully..");
                    formData.uid = user.uid;
                    addUser(formData);
                    profileImage && uploadImage(profileImage);
                    sendMailVerification(user);
                    dispatch(showNotificationPopup("Email Verification was sent. Please check your inbox to complete the registration."));
                    let btnElement = document.querySelector('#join') as HTMLButtonElement;
                    btnElement.disabled = true;

                    clearFormData();
                })
                .catch((error)=> {
                    const errorCode = error.code;
                    console.error(`User registration was failed due to ${error.message} with error code - ${errorCode}`);
                    if(errorCode === 'auth/email-already-in-use') {
                        setEmailValidationMessage("Email already in use.");
                    }
                });
            }
            
        }
    }

    const clearFormData = ()=> {
        
        let radioButton = document.querySelector('input[value="free"]') as HTMLInputElement;
        radioButton.checked = true;

        let radioButtonGroup = document.querySelectorAll('input[name="canShowOnlyGamerInformation"]');
        for (let i = 0; i < radioButtonGroup.length; i++) { 
            let radio = radioButtonGroup[i] as HTMLInputElement; 
            if (radio.value == 'yes') { 
              radio.checked = true; 
            }
        }

        radioButtonGroup = document.querySelectorAll('input[name="canDoEmailContact"]');
        for (let i = 0; i < radioButtonGroup.length; i++) { 
            let radio = radioButtonGroup[i] as HTMLInputElement; 
            if (radio.value == 'yes') { 
              radio.checked = true; 
            }
        }

        let checkBox = document.getElementById('isTermsAndConditionsVerified') as HTMLInputElement;
        checkBox.checked = false;
        

        let loginForm = document.getElementById('login');
        let inputs = loginForm?.querySelectorAll('input');
        inputs?.forEach((inputElement: HTMLInputElement) => {
            inputElement.value = '';
        });

        let gamerInfo  = document.getElementById('gamer_details');
        inputs = gamerInfo?.querySelectorAll('input');
        inputs?.forEach((inputElement: HTMLInputElement) => {
            inputElement.value = '';
        });

        let stateElement = document.getElementById('state') as HTMLSelectElement;
        stateElement.selectedIndex = 28;

        let genderElement  = document.getElementById('sex') as HTMLSelectElement;
        genderElement.selectedIndex = -1;

        let btnElement = document.querySelector('#join') as HTMLButtonElement;
        btnElement.disabled = false;
        
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        switch(name) {
            case "isTermsAndConditionsVerified": 
                    setFormData({
                        ...formData,
                        [name]: (e.target as HTMLInputElement).checked
                    });
                break;
            case "canDoEmailContact":
                setFormData({
                    ...formData,
                    [name]: value === "no" ? false : true
                  });
                break;
            case "canShowOnlyGamerInformation":
                setFormData({
                    ...formData,
                    [name]: value === "no" ? false : true
                  });
                break;
            default:
                setFormData({
                    ...formData,
                    [name]: value
                  });
                break;
        }
        validateField(name, value);
    }

    const validateField = (fieldName: string, value: string | number | boolean)=> {
        let error =  '';
        let inputElement = null;
        switch(fieldName) {
            case 'firstName':
                value = value as string;
                error = value.trim() === '' ? 'First Name is required' : '';
                inputElement = document.getElementById('firstName') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'lastName':
                value = value as string;
                error = value.trim() === '' ? 'Last Name is required' : '';
                inputElement = document.getElementById('lastName') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'email':
                value = value as string;
                error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
                inputElement = document.getElementById('email') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'confirmEmail':
                inputElement = document.getElementById('confirmEmail') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'psw':
                value = value as string;
                error = value.trim() === '' ? 'Password is required' : '';
                inputElement = document.getElementById('psw') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'psw_repeat': 
                inputElement = document.getElementById('psw_repeat') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'gamerName':
                value = value as string;
                error = value.trim() === '' ? 'Gamer name is required' : '';
                inputElement = document.getElementById('gamerName') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'city':
                value = value as string;
                error = value.trim() === '' ? 'city is required' : '';
                inputElement = document.getElementById('city') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'country':
                value = value as string;
                error = value.trim() === '' ? 'country is required' : '';
                inputElement = document.getElementById('country') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'birthYear':
                value = value as number;
                error = value === 0 ? 'Birth year is required' : '';
                inputElement = document.getElementById('birthYear') as HTMLInputElement;
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
                break;
            case 'isTermsAndConditionsVerified':
                inputElement = document.getElementById('isTermsAndConditionsVerified') as HTMLInputElement;    
                value = inputElement.checked;
                error = value === false ? "It must be selected": '';
                inputElement.setCustomValidity('');
                inputElement.reportValidity();
        }

        setFormError({
            ...formError,
            [fieldName]: error
          });
    }

    const memberShipChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMemberShip(e.target.value);
        formData.memberShip = e.target.value;
    }

    const upgradeMemberShipChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUpgradeMemberShip(e.target.value);
        formData.memberShip = e.target.value;
    }


    const gamerInformationVisibilityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCanShowOnlyGamerInformation(e.target.value);
        formData.canShowOnlyGamerInformation = e.target.value === "yes" ? true : false;
    }

    const canDoEmailContactChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCanDoEmailContact(e.target.value);
        formData.canDoEmailContact = e.target.value === "yes" ? true : false;
    }

    return (
    <section className="flex">
            <div className="flex-[60%] text-black font-[Arial] ml-[20px]">
                {!isExistingMember ?
                    <div>
                        <h1 className="text-[red] text-[18px] font-[800] ml-[22px]">JOIN FOR FREE:</h1>
                        <ul>
                            <li>
                                <input className="align-middle mr-[10px] cursor-pointer" type="radio" id="freeMember" name="memberShip" value="free" checked={memberShip === 'free'} onChange={memberShipChange}/>
                                <label htmlFor="freeMember" className="text-[12px] font-[800] cursor-pointer">REDJACK MEMBERSHIP / 60 Minutes of free play per day</label><br />
                                <p className="text-[red] text-[10px] ml-[22px]">Or Up Grade to One Eye Jack Membership with unlimited play and no advertising</p>
                            </li>
                            <li>
                                <input className="align-middle mr-[10px] cursor-pointer" type="radio" id="annualMember" name="memberShip" value="annual" checked={memberShip === 'annual'} onChange={memberShipChange}/>
                                <label htmlFor="annualMember" className="text-[12px] cursor-pointer">Annual membership at $60/year (16 cents per day)</label><br />
                            </li>
                            <li>
                                <input className="align-middle mr-[10px] cursor-pointer" type="radio" id="monthlyMember" name="memberShip" value="monthly" checked={memberShip === 'monthly'} onChange={memberShipChange}/>
                                <label htmlFor="monthlyMember" className="text-[12px] cursor-pointer">Monthly membership at $5.99/month (20 cents a day)</label><br />
                            </li>
                        </ul>
                    </div>
                    : <div className="flex m-[15px] justify-center">
                        <img className="w-[14%] h-[0%]" src='/assets/images/logo-trans.png' />
                        <div className="font-[600]">
                            <ul>
                                <li>Redjack Member (Free)</li>
                                <li>Member ID # 011218-0001NJ</li>
                                <li>Member Since 01/12/2018</li>
                            </ul>
                            <input type="button" className="bg-[red] text-black p-[4px] border border-black border-solid cursor-pointer" value={'Cancel Membership'} />
                        </div>
                    </div>
                }
            <form id="login">
                <ul className="text-right mr-[20px] text-[14px]">
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="firstName"><b>First Name</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="text" placeholder="Enter First Name" name="firstName" id="firstName" required  onChange={handleChange}/>
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="lastName"><b>Last Name</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="text" placeholder="Enter Last Name" name="lastName" id="lastName" required onChange={handleChange}/>
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="email"><b>E-Mail</b></label>
                        <input ref={mailInputRef} className="border border-black border-solid w-[66%] h-[30px]" type="text" placeholder="Enter Email" name="email" id="email" required onChange={handleChange}/>
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="confirmEmail"><b>Confirm E-Mail</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="text" placeholder="Confirm Email" name="confirmEmail" id="confirmEmail" required onChange={handleChange}/>
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="psw"><b>Password</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={handleChange} />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="psw_repeat"><b>Confirm Password</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="password" placeholder="Repeat Password" name="psw_repeat" id="psw_repeat" required onChange={handleChange}/>
                    </li>
                </ul>
            </form>
                <div>
                    <div className="flex mt-10px">
                        <div className="flex-[34%]">
                            <Avatar callback={setProfileImage} url={profileUrl} />
                            {/* <div className="border border-black border-solid m-[10px] h-[70%] w-[80%]"> </div>
                            <div className="underline text-[12px] font-[800]">Add Photo or Avatar</div> */}
                            {/* implement file upload */}
                        </div>
                        <div className="flex-[66%] bg-[#ff0000] mr-[20px] py-[10px] px-2" id="gamer_details">
                            <ul className="text-right text-[12px]">
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="gamerName"><b>Gamer Name</b></label>
                                    <input className="border border-black border-solid" type="text" placeholder="Gamer Name" name="gamerName" id="gamerName" required  onChange={handleChange}/>
                                </li>
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="city"><b>City</b></label>
                                    <input className="border border-black border-solid" type="text" placeholder="Enter City" name="city" id="city" required onChange={handleChange}/>
                                </li>
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="country"><b>County</b></label>
                                    <input className="border border-black border-solid" type="text" placeholder="Enter County" name="country" id="country" required onChange={handleChange}/>
                                </li>
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="state"><b>State/Plus</b></label>
                                    <select onChange={handleChange} name="state" id="state">
                                        {
                                            stateItems.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.key} selected={item.key === 'NV'}>{item.value}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </li>
                                <li className="mb-[5px] flex flex-row justify-between">
                                    <div className="flex flex-row">
                                        <label className="mr-[5px] birthYearLabel" htmlFor="birthYear"><b>Birth Year</b></label>
                                        <input className="border border-black border-solid w-[50px]" type="number" placeholder="" name="birthYear" id="birthYear" required  onChange={handleChange}/>
                                    </div>

                                    <div className="flex flex-row">
                                        <label className="mr-[7px] ml-[4px]" htmlFor="gamer_sex"><b>Sex</b></label>
                                        <select className="border border-solid w-[127px]" id="sex" name="sex" onChange={handleChange}>
                                            <option value="N"></option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                            <option value="NB">Non-Binary</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`mt-4 text-[14px] pb-4 flex ${isExistingMember ? 'items-center' : 'items-baseline'}`}>
                    <input className="mr-[13px] cursor-pointer" type="checkbox" id="isTermsAndConditionsVerified" name="isTermsAndConditionsVerified" value="isTermsAndConditionsVerified" onChange={handleChange} />
                    {!isExistingMember ?
                        <ul>
                            <li>I have read and agree to the rules of membership for Gametown.us</li>
                            <li>You will receive a e-mail to confirm your membership.</li>
                            <li className="leading-[6px] cursor-pointer">Please check to activate membership</li>
                        </ul>
                        : <div className="text-[11px]">I have read, understand, and agree to the Gametown.com <span className="underline">terms and conditions.</span></div>}
                </div>
                {isExistingMember ? <div className="text-center mb-4">
                    <input className="bg-[red] border border-black border-solid p-[4px] font-600 text-[17px] mr-[10px] text-white cursor-pointer" type="button" value={"Cancel Changes"} />
                    <input className="bg-[red] border border-black border-solid p-[4px] font-600 text-[17px] text-white cursor-pointer" type="button" value={"Save Changes"} />
                </div> : ''}
            </div>
            <div className="flex-[40%] text-center text-black font-[Arial] text-[14px]">
                {!isExistingMember ? <img className="w-[36%] m-auto" src="assets/images/membership1.png" /> :
                    <div className="font-[600] mt-[15px]">
                        <ul>
                            <li className="text-[red] mb-[15px] font-[800]">Up Grade To One Eye Jack Member</li>
                            <li className="text-left">
                                <input className="align-middle mr-[10px] cursor-pointer" type="radio" id="upannualMember" name="UpMemberShip" value="annual" checked={upgradeMemberShip === 'annual'}  onChange={upgradeMemberShipChange}/>
                                <label htmlFor="upannualMember" className="text-[12px] cursor-pointer">Annual membership at $60/year (16 cents per day)</label><br />
                            </li>
                            <li className="text-left">
                                <input className="align-middle mr-[10px] cursor-pointer" type="radio" id="upmonthlyMember" name="UpMemberShip" value="monthly" checked={upgradeMemberShip === 'monthly'}  onChange={upgradeMemberShipChange}/>
                                <label htmlFor="upmonthlyMember" className="text-[12px] cursor-pointer">Monthly membership at $5.99/month (20 cents a day)</label><br />
                            </li>
                        </ul>
                    </div>
                }

                <ul className="font-[600] text-[13px]">
                    <li className="text-[red] mb-[15px] font-[800]">One Eye Jack Member Benefits</li>
                    <li>No Ads Before Play</li>
                    <li>Unlimited Play</li>
                    <li>Create Free Clubs & Teams</li>
                    <li>Create Free Club Tournaments</li>
                    <li>Play in League Play</li>
                    <li>Club Forum</li>
                    <li>1 Year Membership Receive Free T-Shirt</li>
                </ul>
                {isExistingMember ? <div className="border-b-[2px] border-solid border-black">
                    <input type='button' className="bg-[red] border border-black border-solid font-600 text-[17px] text-white m-[15px] p-[4px] cursor-pointer" value={'Upgrade'} />
                </div> : ''}
                <div className="flex flex-col">
                    <div className="flex mt-[20px]">
                        <div className="flex-[13%] text-left">
                            <div>
                                <input className="mr-[2px] cursor-pointer" type="radio" name="canShowOnlyGamerInformation" id="expose_player_yes" value="yes" checked={canShowOnlyGamerInformation === 'yes'}  onChange={gamerInformationVisibilityChange}/>
                                <label htmlFor="expose_player_yes" className="cursor-pointer">Show</label>
                            </div>
                            <div>
                                <input className="mr-[2px] cursor-pointer" type="radio" name="canShowOnlyGamerInformation" id="expose_player_no" value="no" checked={canShowOnlyGamerInformation === 'no'} onChange={gamerInformationVisibilityChange}/>
                                <label htmlFor="expose_player_no" className="cursor-pointer">Hide</label>
                            </div>
                        </div>
                        <div className="flex-[72%] text-[13px] text-left">
                            Listing will show only gamer’s name, City, County, State, Birth Year and Sex.
                        </div>
                    </div>
                    <div className="flex mt-[20px]">
                        <div className="flex-[13%] text-left">
                            <div>
                                <input className="mr-[2px] cursor-pointer" type="radio" name="canDoEmailContact" id="contact_player_yes" value="yes" checked={canDoEmailContact === 'yes'}   onChange={canDoEmailContactChange} />
                                <label htmlFor="contact_player_yes" className="cursor-pointer">Yes</label>
                            </div>
                            <div>
                                <input className="mr-[2px] cursor-pointer" type="radio" name="canDoEmailContact" id="contact_player_no" value="no"  checked={canDoEmailContact === 'no'}   onChange={canDoEmailContactChange} />
                                <label htmlFor="contact_player_no" className="cursor-pointer">No</label>
                            </div>
                        </div>
                        <div className="flex-[72%] text-[13px] text-left">
                            Can you be contacted to be invited to Tournaments, Leagues and Events?
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] pb-10">
                    <div className="mb-[20px]">Results will use Gamer Name</div>
                    {!isExistingMember ? <input id="clear" className="bg-[red] border border-black border-solid w-[70px] h-[30px] font-600 text-[17px] mr-[10px] text-white cursor-pointer" type="button" value={"Clear"} onClick={clearFormData} /> : ''}
                    {!isExistingMember ? <input id="join" className="bg-[red] border border-black border-solid w-[70px] h-[30px] font-600 text-[17px] text-white cursor-pointer" type="button" value={"Join"} onClick={joinBtnClick} /> : ''}
                </div>
            </div>
        </section> 
    
    )
}

export default HomeContainer;