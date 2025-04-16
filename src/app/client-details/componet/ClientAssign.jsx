"use client"
import React, { useState } from 'react'
import aiImage from "../../../../public/ai-image.svg"
import Image from 'next/image'

const clientList = [
    {
        name: "Cameron Williamson",
        code: "JOB106731",
        addressLine1: "4140 Parker Rd",
        addressLine2: "Allentown, New Mexico 31134",
        id: 1
    },
    {
        name: "Cameron Williamson",
        code: "JOB106731",
        addressLine1: "4140 Parker Rd",
        addressLine2: "Allentown, New Mexico 31134",
        id: 2
    },
    {
        name: "Cameron Williamson",
        code: "JOB106731",
        addressLine1: "4140 Parker Rd",
        addressLine2: "Allentown, New Mexico 31134",
        id: 3
    },
    {
        name: "Cameron Williamson",
        code: "JOB106731",
        addressLine1: "4140 Parker Rd",
        addressLine2: "Allentown, New Mexico 31134",
        id: 4
    }
]

function ClientAssign() {
    const [selectedTab, setSelectedTab] = useState("Unassigned")

    return (
        <div className="w-full md:w-4/12 border-l border-[#EEEFF1]">
            <div className="border-b border-[#EEEFF1] px-4 py-3">
                <div className="flex justify-center gap-3">
                    {['Assigned', 'Unassigned'].map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedTab(tab)}
                            className={`text-[12px] font-semibold rounded-lg px-2 py-1 border flex items-center gap-1 ${tab === selectedTab
                                ? 'bg-[#FAFAFA] border-[#EEEFF1] text-[#232529]'
                                : 'border-transparent text-[#667085] hover:border-[#EEEFF1] hover:bg-[#FAFAFA] hover:text-[#232529]'
                                }`}
                        >
                            {tab}
                            {tab === 'Unassigned' && (
                                <span className="relative flex size-3 top-[-11px] right-[-11px]">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-4 py-3">
                <button className="w-full flex items-center justify-center gap-2 border border-[#EEEFF1] rounded-md bg-[#F4F4F5] px-3 py-2 text-[14px] font-semibold text-[#232529]">
                    Assign All <Image src={aiImage} alt="AI" className="w-4 h-4 animate-bounce" />
                </button>

                {selectedTab === 'Assigned' ? (
                    <div className="mt-4 text-[13px] text-[#667085] text-center">No assigned data found</div>
                ) : (
                    <ul className="mt-4 divide-y divide-[#EEEFF1]">
                        {clientList.map((info, i) => (
                            <li key={info.id} className="py-4">
                                <div className="flex justify-between mb-1">
                                    <span className="text-[14px] font-medium text-[#232529]">{info.name}</span>
                                    <span className="text-[13px] text-[#667085]">{info.code}</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <p className="text-[13px] text-[#667085] leading-[15px]">
                                        {info.addressLine1} <br />
                                        {info.addressLine2}
                                    </p>
                                    <button className="h-5 px-4 text-[12px] font-semibold border border-[#EEEFF1] bg-[#F4F4F5] rounded-md text-[#232529]">
                                        Assign
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default ClientAssign
