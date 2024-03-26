"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";


const Members = () => {
    const router = useRouter();

    return (
        <div>
            <table className="m-auto w-[90%] mt-[20px] textAlignCentre font-Arial fontSize20">
                <tbody>
                    <tr>
                        <td className="pr-[10px] font-[600]">Gamer Name</td>
                        <td className="pr-[10px] font-[600]">State/County</td>
                        <td className="pr-[10px] font-[600]">Sex/B-Year</td>
                        <td className="pr-[10px] font-[600]">Contact</td>
                        <td className="pr-[10px] font-[600]">Clubs</td>
                        <td className="pr-[10px] font-[600]">Play Time</td>
                    </tr>
                    <tr className="cursor-pointer" onClick={() => { router.push("/memberclub/member") }}>

                        <td className="pr-[10px]">Smith</td>
                        <td className="pr-[10px]">NJ/Union</td>
                        <td className="pr-[10px]">M/1990</td>
                        <td className="pr-[10px]">Yes</td>
                        <td className="pr-[10px]">1</td>
                        <td className="pr-[10px]">0</td>

                    </tr>
                    <tr className="cursor-pointer bg-gray-300">
                        <td className="pr-[10px]">Smith</td>
                        <td className="pr-[10px]">NJ/Union</td>
                        <td className="pr-[10px]">M/1990</td>
                        <td className="pr-[10px]">No</td>
                        <td className="pr-[10px]">1</td>
                        <td className="pr-[10px]">10h</td>
                    </tr>
                    <tr className="cursor-pointer">
                        <td className="pr-[10px]">Smith</td>
                        <td className="pr-[10px]">NJ/Union</td>
                        <td className="pr-[10px]">M/1990</td>
                        <td className="pr-[10px]">Yes</td>
                        <td className="pr-[10px]">1</td>
                        <td className="pr-[10px]">100h</td>
                    </tr>
                    <tr className=" cursor-pointer bg-gray-300">
                        <td className="pr-[10px]">Smith</td>
                        <td className="pr-[10px]">NJ/Union</td>
                        <td className="pr-[10px]">M/1990</td>
                        <td className="pr-[10px]">No</td>
                        <td className="pr-[10px]">1</td>
                        <td className="pr-[10px]">10h</td>
                    </tr>
                </tbody>
            </table>
        </div>


    )
}

export default Members;