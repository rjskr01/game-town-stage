'use client'

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { logIn } from "@/firebase/login";
import { logOut } from "@/firebase/logout";

import { useRouter } from 'next/navigation'

interface LoginInfo  {
    email: string,
    password: string
}

interface LoginError {
    email: string,
    password: string
}

const Login = () => {

    const [loginData, setLoginData] = useState<LoginInfo>({
        email : "",
        password : ""
    });

    const [loginError, setLoginError] = useState<LoginError>({
        email: "",
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

                if(isValidData) {
                    logIn(loginData.email, loginData.password).then(res => {
                        console.log("Login successfully");
                        setLoginText("LOG OUT");
                        router.push("/home?subpage=game");
                    }).catch(err=>{
                        console.log(err);
                    });
                }
            }
        } else {
            signOut();
        }
    }

    const signOut = () => {
        logOut();
        setLoginText("LOG IN");
        router.push("/");
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({...loginData, [name] : value});
        validateField(name, value);
    }

    const validateField = (fieldName: string, value: string) => {
        let error =  '';
        switch(fieldName) {
            case 'email':
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
                <div className="float-left font-['Arial'] text-center text-[13px] bg-grey rounded-[10px] w-[150px] h-[20px] leading-[20px] mt-[10px]">
                    <Link href={"/home?subpage=game"} > Join the Jack Club </Link>
                </div>
                <div className="float-left text-[11px] mx-[20px]">
                    <div className="mb-[5px]">
                        <label>USER NAME</label>
                        <input id="email" name="email" type="text" className="p-0 w-[125px] rounded-[5px] ml-[10px] text-black" onChange={handleChange} />
                    </div>
                    <div>
                        <label>PASS WORD</label>
                        <input id="password" name="password" type="password" className="w-[125px] rounded-[5px] ml-[10px] text-black" onChange={handleChange} />
                    </div>

                </div>
                <div className="cursor-pointer float-left">
                    <div className="circle">
                        <div className="rect" onClick={login}>{loginText}</div>
                    </div>
                </div>
            </section>
    )
}

export default Login;