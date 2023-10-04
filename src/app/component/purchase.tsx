const Purchase = () => {
    return (
        <div className="flex flex-row px-[14px] pt-[24px] gap-[20px] justify-between">
            <div className="flex flex-col gap-[8px] basis-2/4">
                <div className="flex flex-row justify-between">
                    <h1 className="text-emerald-500 font-bold">MyCreditCard</h1>
                    {/* TODO: Button should be replaced with the Drop down list*/}
                    <button className="border-solid border-r border-b border-l border-t border-gray-300 p-[5px] text-[10px]">Add Card</button>
                </div>
                <form className="mt-[8px]">
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-row justify-between">
                            <label>First Name</label>
                            <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[225px]" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-between">
                            <label>Last Name</label>
                            <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[225px]" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-between">
                            <label>Billing Address</label>
                            <div className="flex flex-col gap-[16px]">
                                <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[225px]" type="text"></input>
                                <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[225px]" type="text"></input>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <label>City</label>
                            <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[225px]" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-between">
                            <label>State</label>
                            <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[225px]" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-between">
                            <label>Zipcode</label>
                            <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[225px]" type="text"></input>
                        </div>

                        <h1 className="self-center">Credit Card Information</h1>
                        <div className="flex flex-row justify-between">
                            <label>Credit Card #</label>
                            <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[225px]" type="text"></input>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-[20px]">
                                <label>Experation Date</label>
                                <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[75px] pl-[20px]" type="text"></input>
                            </div>
                            
                            <div>
                                <label>Code</label>
                                <input className="border-solid border-r border-b border-l border-t border-gray-300  w-[75px] pl-[20px]" type="text"></input>
                            </div>
                            
                        </div>
                        <button className="self-center w-[100px] border-solid border-r border-b border-l border-t border-gray-300 p-[5px] text-[10px] bg-red-600 text-white">Save</button>
                    </div>
                    
                    
                </form>
            </div>
            <div className="basis-2/4">
                <h1 className="text-emerald-500 font-bold">MyPurchases</h1>
                <table className="mt-[20px] text-sm">
                    <thead>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>CC#</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pr-[10px]">01 12 2018 </td>
                            <td className="pr-[10px]">One Eye Jack Membership</td>
                            <td className="">$60.00</td>
                        </tr>
                        <tr className="bg-gray-300">
                            <td className="pr-[10px]">01 12 2018 </td>
                            <td className="pr-[10px]">One Eye Jack Membership</td>
                            <td className="">$60.00</td>
                        </tr>
                        <tr>
                            <td className="pr-[10px]">01 12 2018 </td>
                            <td className="pr-[10px]">One Eye Jack Membership</td>
                            <td className="">$60.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Purchase;