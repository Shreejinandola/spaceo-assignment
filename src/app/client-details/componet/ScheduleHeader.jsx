import Link from 'next/link'
import React from 'react'

function HeaderNav() {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['Event', 'Team View', 'Team Tracking'].map((tab, i) => (
                <Link
                    href="#"
                    key={i}
                    className={`text-[12px] font-semibold rounded-lg px-4 py-1 border transition ${tab === 'Team View'
                        ? 'bg-[#FAFAFA] border-[#EEEFF1] text-[#232529]'
                        : 'border-transparent text-[#667085] hover:border-[#EEEFF1] hover:bg-[#FAFAFA] hover:text-[#232529]'
                        }`}
                >
                    {tab}
                </Link>
            ))}
        </div>
    )
}

function ScheduleHeader() {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 md:px-6 py-3 border-b border-[#EEEFF1] gap-2 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex items-center text-[16px] font-semibold text-[#232529]">
                    <i className="fa-solid fa-chevron-left text-[8px] mr-2"></i> November 2024
                </span>
            </div>
            <div className="flex-1 justify-center sm:justify-center w-full sm:w-auto">
                <HeaderNav />
            </div>
        </div>
    )
}

export default ScheduleHeader
