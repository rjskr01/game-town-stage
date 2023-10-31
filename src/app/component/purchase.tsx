const Purchase = () => {
    return (
        <div className="flex flex-row px-[14px] pt-[24px] gap-[20px] justify-between font-[Arial]">
            <div className="flex flex-col gap-[8px] basis-2/4">
                <div className="flex flex-row justify-end">
                    <h1 className="text-emerald-500 font-bold mr-[50px]">MyCreditCard</h1>
                    {/* TODO: Button should be replaced with the Drop down list*/}
                    <button className="border-solid border-r border-b border-l border-t border-black p-[5px] text-[10px]">Add Card</button>
                </div>
                <form className="my-[8px]">
                    <div className="flex flex-col gap-[16px] text-[12px] md:text-sm">
                        <div className="flex flex-row justify-end">
                            <label className="mr-[10px] font-[600]">First Name</label>
                            <input className="border-solid border border-black  w-[225px] placeholder:text-[10px] placeholder:pl-4" placeholder="Enter First Name" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-end">
                            <label className="mr-[10px] font-[600]">Last Name</label>
                            <input className="border-solid border border-black  w-[225px] placeholder:text-[10px] placeholder:pl-4" placeholder="Enter Last Name" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-end">
                            <label className="mr-[10px] font-[600] truncate">Billing Address</label>
                            <div className="flex flex-col gap-[16px]">
                                <input className="border-solid border border-black  w-[225px] placeholder:text-[10px] placeholder:pl-4" placeholder="Enter Street Name" type="text"></input>
                                <input className="border-solid border border-black  w-[225px] placeholder:text-[10px] placeholder:pl-4" placeholder="Enter House/Apt Number" type="text"></input>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end">
                            <label className="mr-[10px] font-[600]">City</label>
                            <input className="border-solid border border-black  w-[225px] placeholder:text-[10px] placeholder:pl-4" placeholder="Enter City Name" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-end">
                            <label className="mr-[10px] font-[600]">State</label>
                            <input className="border-solid border border-black  w-[225px] placeholder:text-[10px] placeholder:pl-4" placeholder="Enter State Name" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-end">
                            <label className="mr-[10px] font-[600]">Zipcode</label>
                            <input className="border-solid border border-black  w-[225px] placeholder:text-[10px] placeholder:pl-4" placeholder="Enter Zipcode" type="text"></input>
                        </div>

                        <h1 className="self-center font-[600]">Credit Card Information</h1>
                        <div className="flex flex-row justify-end">
                            <label className="mr-[10px] font-[600]">Credit Card #</label>
                            <input className="border-solid border-r border-b border-l border-t border-black  w-[225px] placeholder:text-[10px] placeholder:pl-4" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-[20px]">
                                <label className="mr-[10px] font-[600]">Expiration Date</label>
                                <input className="border-solid border border-black  w-[75px] placeholder:text-[10px] placeholder:pl-4" type="text"></input>
                            </div>

                            <div>
                                <label className="mr-[10px] font-[600]">Code</label>
                                <input className="border-solid border-r border-b border-l border-t border-black  w-[75px] pl-[20px] placeholder:text-[10px] placeholder:pl-4" type="text"></input>
                            </div>

                        </div>
                        <button className="self-center border-solid border border-black p-[5px] text-[14px] bg-red-600 text-white font-[600]">Save</button>
                    </div>


                </form>
            </div>
            <div className="basis-2/4">
                <h1 className="text-emerald-500 font-bold">MyPurchases</h1>
                <table className="mt-[20px] text-[12px] md:text-sm">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>CC#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pr-[10px] truncate">01-12-2023</td>
                            <td className="pr-[10px]">One Eye Jack Membership</td>
                            <td className="">$60.00</td>
                            <td className="">5622</td>
                        </tr>
                        <tr className="bg-gray-300">
                            <td className="pr-[10px] truncate">01-12-2023</td>
                            <td className="pr-[10px]">Free T-Shirt</td>
                            <td className="">$00.00</td>
                            <td className="">N/A</td>
                        </tr>
                        <tr>
                            <td className="pr-[10px] truncate">02-25-2023</td>
                            <td className="pr-[10px]">Blackjack Membership</td>
                            <td className="">$60.00</td>
                            <td className="">6312</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Purchase;