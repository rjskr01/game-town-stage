import stateItems from "../data/state-items";
import DropDownList from "./drop-down-list";

export interface IHomeContainer {
    isExistingMember: boolean
}

const HomeContainer: React.FC<IHomeContainer> = ({ isExistingMember }) => {
    return (
        <section className="flex">
            <div className="flex-[60%] text-black font-[Arial] ml-[20px]">
                {!isExistingMember ?
                    <div>
                        <h1 className="text-[red] text-[20px] font-[800] ml-[22px]">JOIN FOR FREE:</h1>
                        <ul>
                            <li>
                                <input className="align-middle mr-[10px] placeholder:text-[10px] placeholder:pl-4" type="radio" id="freeMember" name="MemberShip" value="free" checked />
                                <label htmlFor="freeMember" className="text-[12px] font-[800]">REDJACK MEMBERSHIP / 60 Minutes of free play per day</label><br />
                                <p className="text-[red] text-[10px] ml-[22px]">Or Up Grade to One Eye Jack Membership with unlimited play and no advertising</p>
                            </li>
                            <li>
                                <input className="align-middle mr-[10px] placeholder:text-[10px] placeholder:pl-4" type="radio" id="annualMember" name="MemberShip" value="annual" />
                                <label htmlFor="annualMember" className="text-[12px]">Annual membership at $60/year (16 cents per day)</label><br />
                            </li>
                            <li>
                                <input className="align-middle mr-[10px] placeholder:text-[10px] placeholder:pl-4" type="radio" id="monthlyMember" name="MemberShip" value="monthly" />
                                <label htmlFor="monthlyMember" className="text-[12px]">Monthly membership at $5.99/month (20 cents a day)</label><br />
                            </li>
                        </ul>
                    </div>
                    : <div className="flex m-[15px] justify-center">
                        <img className="w-[14%] h-[0%]" src='assets/images/logo-trans.png' />
                        <div className="font-[600]">
                            <ul>
                                <li>Redjack Member (Free)</li>
                                <li>Member ID # 011218-0001NJ</li>
                                <li>Member Since 01/12/2018</li>
                            </ul>
                            <input type="button" className="bg-[red] text-black p-[4px] border border-black border-solid" value={'Cancel Membership'} />
                        </div>
                    </div>
                }
                <ul className="text-right mr-[20px] text-[12px] md:text-[14px]">
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="first_name"><b>First Name</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px] placeholder:text-[10px] placeholder:pl-4" type="text" placeholder="Enter First Name" name="first_name" id="first_name" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="last_name"><b>Last Name</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px] placeholder:text-[10px] placeholder:pl-4" type="text" placeholder="Enter Last Name" name="last_name" id="last_name" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="email"><b>E-Mail</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px] placeholder:text-[10px] placeholder:pl-4" type="text" placeholder="Enter Email" name="email" id="email" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="confirm_email"><b>Confirm E-Mail</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px] placeholder:text-[10px] placeholder:pl-4" type="text" placeholder="Confirm Email" name="confirm_email" id="confirm_email" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="psw"><b>Password</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px] placeholder:text-[10px] placeholder:pl-4" type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    </li>
                    <li className="mb-[5px]">
                        <label className="mr-[10px]" htmlFor="psw-repeat"><b>Confirm Password</b></label>
                        <input className="border border-black border-solid w-[66%] h-[30px] placeholder:text-[10px] placeholder:pl-4" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    </li>
                </ul>
                <div>
                    <div className="flex mt-10px">
                        <div className="flex-[34%]">
                            <div className="border border-black border-solid m-[10px] h-[70%] w-[80%]"> </div>
                            <div className="underline text-[12px] font-[800]">Add Photo or Avatar</div>
                            {/* implement file upload */}
                        </div>
                        <div className="flex-[66%] bg-[#ff0000] mr-[20px] p-[10px]">
                            <ul className="text-right text-[12px]">
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="gamer_name"><b>Gamer Name</b></label>
                                    <input className="border border-black border-solid placeholder:text-[10px] placeholder:pl-4" type="text" placeholder="Gamer Name" name="gamer_name" id="gamer_name" required />
                                </li>
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="gamer_city"><b>City</b></label>
                                    <input className="border border-black border-solid placeholder:text-[10px] placeholder:pl-4" type="text" placeholder="Enter City" name="gamer_city" id="gamer_city" required />
                                </li>
                                <li className="mb-[5px]">
                                    <label className="mr-[10px]" htmlFor="gamer_county"><b>County</b></label>
                                    <input className="border border-black border-solid placeholder:text-[10px] placeholder:pl-4" type="text" placeholder="Enter County" name="gamer_county" id="gamer_county" required />
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
                                    <select className="border border-solid w-[90px]" id="gamer_sex" name="sex">
                                        <option value="N"></option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="NB">Non-Binary</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`mt-[20px] text-[14px] pb-10 flex ${isExistingMember ? 'items-center' : 'items-baseline'}`}>
                    <input className="mr-[13px] placeholder:text-[10px] placeholder:pl-4" type="checkbox" id="terms" name="terms" value="terms" />
                    {!isExistingMember ?
                        <ul>
                            <li>I have read and agree to the rules of membership for Gametown.us</li>
                            <li>You will receive a e-mail to confirm your membership.</li>
                            <li className="leading-[6px]">Please check to activate membership</li>
                        </ul>
                        : <div className="text-[11px]">I have read, understand, and agree to the Gametown.com <span className="underline">terms and conditions.</span></div>}
                </div>
                {isExistingMember ? <div className="text-center mt-[15px] md:mt-[15px]">
                    <input className="bg-[red] border border-black border-solid p-[4px] font-600 text-[17px] mr-[10px] text-white placeholder:text-[10px] placeholder:pl-4" type="button" value={"Cancel Changes"} />
                    <input className="bg-[red] border border-black border-solid p-[4px] font-600 text-[17px] text-white placeholder:text-[10px] placeholder:pl-4" type="button" value={"Save Changes"} />
                </div> : ''}
            </div>
            <div className="flex-[40%] text-center text-black font-[Arial] text-[14px]">
                {!isExistingMember ? <img className="w-[36%] m-auto" src="assets/images/membership1.png" /> :
                    <div className="font-[600] mt-[15px]">
                        <ul>
                            <li className="text-[red] mb-[15px] font-[800]">Up Grade To One Eye Jack Member</li>
                            <li className="text-left">
                                <input className="align-middle mr-[10px]" type="radio" id="upannualMember" name="UpMemberShip" value="annual" checked />
                                <label htmlFor="upannualMember" className="text-[12px]">Annual membership at $60/year (16 cents per day)</label><br />
                            </li>
                            <li className="text-left">
                                <input className="align-middle mr-[10px]" type="radio" id="upmonthlyMember" name="UpMemberShip" value="monthly" />
                                <label htmlFor="upmonthlyMember" className="text-[12px]">Monthly membership at $5.99/month (20 cents a day)</label><br />
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
                    <input type='button' className="bg-[red] border border-black border-solid font-600 text-[17px] text-white m-[15px] p-[4px]" value={'Upgrade'} />
                </div> : ''}
                <div className="flex flex-col">
                    <div className="flex mt-[20px]">
                        <div className="flex-[13%]">
                            <div>
                                <input className="mr-[2px]" type="radio" name="expose_player" id="expose_player_yes" value="yes" checked />
                                <label htmlFor="expose_player_yes">Show</label>
                            </div>
                            <div>
                                <input className="mr-[2px]" type="radio" name="expose_player" id="expose_player_no" value="no" />
                                <label htmlFor="expose_player_no">Hide</label>
                            </div>
                        </div>
                        <div className="flex-[72%] text-[13px]">
                            Listing will show only gamer’s name, City, County, State, Birth Year and Sex.
                        </div>
                    </div>
                    <div className="flex mt-[20px]">
                        <div className="flex-[9%]">
                            <div>
                                <input className="mr-[2px]" type="radio" name="can_contacted" id="contact_player_yes" value="yes" checked />
                                <label htmlFor="contact_player_yes">Yes</label>
                            </div>
                            <div>
                                <input className="mr-[2px]" type="radio" name="can_contacted" id="contact_player_no" value="no" />
                                <label htmlFor="contact_player_no">No</label>
                            </div>
                        </div>
                        <div className="flex-[72%] text-[13px]">
                            Can you be contacted to be invited to Tournaments, Leagues and Events?
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] pb-10">
                    <div className="mb-[20px]">Results will use Gamer Name</div>
                    {!isExistingMember ? <input className="bg-[red] border border-black border-solid w-[70px] h-[30px] font-600 text-[17px] mr-[10px] text-white" type="button" value={"Clear"} /> : ''}
                    {!isExistingMember ? <input className="bg-[red] border border-black border-solid w-[70px] h-[30px] font-600 text-[17px] text-white" type="button" value={"Join"} /> : ''}
                </div>
            </div>
        </section >
    )
}

export default HomeContainer;