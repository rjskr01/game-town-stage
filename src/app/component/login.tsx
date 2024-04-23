'use client'

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { logIn } from "@/firebase/login";
import { logOut } from "@/firebase/logout";

import { useRouter } from 'next/navigation'
import { getUser } from "@/firebase/user.services";
import { FormState } from "./home";
import { DocumentData } from "firebase/firestore";

interface LoginInfo  {
    userName: string,
    password: string,
    firstName?: string | null | undefined
}

interface LoginError {
    userName: string,
    password: string
}

const Login = () => {

    const [loginData, setLoginData] = useState<LoginInfo>({
        userName : "",
        password : ""
    });

    const [loginError, setLoginError] = useState<LoginError>({
        userName: "",
        password: ""
    });

    const [loginText, setLoginText] = useState<string>("LOG IN");

    const router = useRouter();

    const login = () => {
        if(loginText === "LOG IN") {
            let isValidData = true;
            for (const key in loginError) {
                let error = loginError[key as keyof typeof loginError];
                if (error != "") {
                    isValidData = false;
                    let inputElement: HTMLInputElement = document.querySelector(`input#${key}`) as HTMLInputElement;
                    if(inputElement) {
                        inputElement.setCustomValidity(error);
                        inputElement.reportValidity();
                    }
                }
            }

            if(isValidData) {
                logIn(loginData.userName, loginData.password).then(res => {
                    console.log("Login successfully");
                    setLoginText("LOG OUT");
                    let inputElement: HTMLInputElement = document.querySelector(`input#userName`) as HTMLInputElement;
                    inputElement.value = "";
                    let passwordElement = document.querySelector('input#password') as HTMLInputElement;
                    passwordElement.value = "";
                    getUser(res.user.uid).then((user => {
                        console.log(user?.firstName);
                        setLoginData({...loginData, firstName: user?.firstName});
                    }));
                    router.push("/");
                }).catch(err=> {
                    let passwordElement = document.querySelector('input#password') as HTMLInputElement;
                    passwordElement.setCustomValidity('Invalid credentials');
                    passwordElement.reportValidity();
                    console.log(err);
                });
            }
        } else {
            signOut();
        }
    }

    const signOut = () => {
        logOut();
        setLoginText("LOG IN");
        setLoginData({...loginData, firstName:null})
        router.push("/");
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let inputElement: HTMLInputElement = document.querySelector(`input#${name}`) as HTMLInputElement;
        inputElement.setCustomValidity(" ");
        setLoginData({...loginData, [name] : value});
        validateField(name, value);
    }

    const validateField = (fieldName: string, value: string) => {
        let error =  '';
        switch(fieldName) {
            case 'userName':
                value = value as string;
                error = value.trim() === '' ? 'email is required.' : '';
                break;
            case 'password':
                value = value as string;
                error = value.trim() === '' ? 'Password is required' : '';
                break;
        }
    }

    return (
        <section className="flex justify-end w-[90%] mt-[20px]">
                <div className={`float-left font-['Arial'] text-center text-[13px] bg-grey rounded-[10px] w-[150px] h-[20px] leading-[20px] mt-[10px] ${loginText === "LOG OUT" ? "hidden" : ""}`}>
                    <Link href={"/home?subpage=game"} > Join the Jack Club </Link>
                </div>
                <div className={`float-left text-[11px] mx-[20px] ${loginText === "LOG OUT" ? "hidden" : ""}`}>
                    <div className="mb-[5px]">
                        <label>USER NAME</label>
                        <input id="userName" name="userName" type="text" className="p-0 w-[125px] rounded-[5px] ml-[10px] text-black" onChange={handleChange} />
                    </div>
                    <div>
                        <label>PASS WORD</label>
                        <input id="password" name="password" type="password" className="w-[125px] rounded-[5px] ml-[10px] text-black" onChange={handleChange} />
                    </div>
                </div>
                <div className={`float-left text-[11px] mx-[20px] ${loginData.firstName ? "" : "hidden"}`}>
                    <p className="uppercase text-[13px] text-red-600">{`Welcome`}</p>
                    <p className="uppercase text-[13px] text-red-600">{`${loginData.firstName}`}</p>
                </div>
                <div className={`cursor-pointer float-left ${loginText === "LOG OUT" ? "ml-6" : ""}`}>
                    <div className="circle">
                        <div className="rect" onClick={login}>{loginText}</div>
                    </div>
                </div>
            </section>
    )
}

export default Login;