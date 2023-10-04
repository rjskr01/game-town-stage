import stateItems from "../data/state-items";
import DropDownList from "./drop-down-list";

export default function HomeContainer() {
    return (
        <section className="flex">
            <div className="flex-[65%] text-black font-[Arial] ml-[20px]">
                <h1 className="text-[red] text-[18px] font-[800] ml-[22px]">JOIN FOR FREE:</h1>
                <ul>
                    <li>
                        <input className="align-middle mr-[10px]" type="radio" id="freeMember" name="MemberShip" value="free" checked />
                        <label htmlFor="freeMember" className="text-[12px] font-[800]">REDJACK MEMBERSHIP / 60 Minutes of free play per day</label><br />
                        <p className="text-[red] text-[10px] ml-[22px]">Or Up Grade to One Eye Jack Membership with unlimited play and no advertising</p>
                    </li>
                    <li>
                        <input className="align-middle mr-[10px]" type="radio" id="annualMember" name="MemberShip" value="annual" />
                        <label htmlFor="annualMember" className="text-[12px]">Annual membership at $60/year (16 cents per day)</label><br />
                    </li>
                    <li>
                        <input className="align-middle mr-[10px]" type="radio" id="monthlyMember" name="MemberShip" value="monthly" />
                        <label htmlFor="monthlyMember" className="text-[12px]">Monthly membership at $5.99/month (20 cents a day)</label><br />
                    </li>
                </ul>

                <ul className="text-right mr-[20px] text-[14px]">
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="first_name"><b>First Name</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="text" placeholder="Enter First Name" name="first_name" id="first_name" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="last_name"><b>Last Name</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="text" placeholder="Enter Last Name" name="last_name" id="last_name" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="email"><b>E-Mail</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="text" placeholder="Enter Email" name="email" id="email" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="confirm_email"><b>Confirm E-Mail</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="text" placeholder="Confirm Email" name="confirm_email" id="confirm_email" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="psw"><b>Password</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="psw-repeat"><b>Confirm Password</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px]" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    </li>
                </ul>
                <div>
                    <div className="flex mt-10px">
                        <div className="flex-[39%]">
                            {/* <div>
                                <img alt="image"></img>
                                <div className="border border-black border-solid"></div>
                            </div>
                            <input className="" type="file">Add Photo or Avatar</input> */}
                        </div>
                        <div className="flex-[61%] bg-[#ff0000] mr-[20px] p-[10px]">
                            <ul className="text-right text-[13px]">
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="gamer_name"><b>Gamer Name</b></label>
                                    <input className="border border-black border-solid" type="text" placeholder="Gamer Name" name="gamer_name" id="gamer_name" required />
                                </li>
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="gamer_city"><b>City</b></label>
                                    <input className="border border-black border-solid" type="text" placeholder="Enter City" name="gamer_city" id="gamer_city" required />
                                </li>
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="gamer_county"><b>County</b></label>
                                    <input className="border border-black border-solid" type="text" placeholder="Enter County" name="gamer_county" id="gamer_county" required />
                                </li>
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="gamer_state"><b>State/Plus</b></label>
                                    <select>
                                        {
                                            stateItems.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.key} selected={item.key === 'NV'}>{item.value}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </li>
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="gamer_by"><b>Birth Year</b></label>
                                    <input className="border border-black border-solid w-[50px]" type="text" placeholder="" name="gamer_by" id="gamer_by" required />
                                    <label className="mr-[10px]" htmlFor="gamer_sex"><b>Sex</b></label>
                                    <select className="border border-solid w-[90px]" id="gamer_sex" name="cars">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="NB">Non-Binary</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] text-[14px] flex items-baseline">
                    <input className="mr-[13px]" type="checkbox" id="terms" name="terms" value="terms" />
                    <ul>
                        <li>I have read and agree to the rules of membership for Gametown.us</li>
                        <li>You will receive a e-mail to confirm your membership.</li>
                        <li>Please check to activate membership</li>
                    </ul>
                </div>
            </div>
            <div className="flex-[35%]">

            </div>
        </section>
    )
}