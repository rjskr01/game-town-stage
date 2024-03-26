import { useEffect } from "react";
import Avatar from "../../component/avatar";
import TournamentContainer from "../../component/tournament-container";
import member from "../../data/default-member";

const Member = () => {

    return<>
        <div className="flex flex-row min-w-screen">
            <div className="flex-[60%] ml-[50px]">
                <div  className="w-[90%] h-auto md:h-[calc(100vh-150px)] bg-white flex flex-row justify-between">
                    <div className="flex flex-col max-w-[350px]">
                        <Avatar/>
                        <div className="m-6 flex flex-col gap-4">
                            <p className="text-black text-sm">{member.aboutme}</p>
                            <p className="text-black text-sm">{member.gamesintrest}</p>
                            <a className="hover:underline hover:cursor-pointe text-blue-500" href={member.socialmedia}>Social Media : {member.socialmedia}</a>
                        </div>
                        
                    </div>
                    
                    <div className="flex flex-col my-6">
                        <h1 className="text-black text-2xl">{member.firstName}</h1>
                        <p className="text-black text-sm">{member.state} / {member.country}</p>
                        <p className="text-black text-sm">{member.gender} </p>
                        <p className="text-black text-sm">{member.clubs} </p>
                        <p className="text-black text-sm">{member.playtime} </p>
                    </div>
                    <div className="message-editor border-solid border border-gray-300 w-[200px] h-[200px] m-6 rounded-lg p-[2px]">
                        <textarea id="message-input" className="w-full h-full resize-none text-black" placeholder="Enter your message"></textarea>
                        <div className="text-center"><button id="submit-button" className="bg-red-600 rounded-md w-[100px]">Connect</button></div>
                    </div>
                </div>
            </div>
            <TournamentContainer />
        </div>
    </>
}

export default Member;