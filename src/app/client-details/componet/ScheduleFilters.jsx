import React from 'react'

function FilterOption({ arr }) {
    return (
        <>
            {arr.map((info, i) => (
                <div key={i + 1} className="flex text-xs items-center gap-1.5">
                    <div className="font-bold">{info}</div>
                    <div>
                        <i className="fa-solid fa-chevron-down text-[8px]"></i>
                    </div>
                </div>
            ))}
        </>
    )
}

function ScheduleFilters() {
    return (
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 px-4 md:px-6 py-3 border-b border-[#EEEFF1] sm:items-center">
            {/* Left filter options */}
            <div className="flex gap-3">
                <FilterOption arr={['Status', 'Team']} />
            </div>

            {/* Right side filters and today control (push to end on sm+) */}
            <div className="flex flex-col sm:flex-row sm:ml-auto gap-3 sm:items-center">
                {/* Time filters */}
                <div className="flex gap-3">
                    <FilterOption arr={['1 hour', 'Day']} />
                </div>

                {/* Today controls */}
                <div className="flex items-center gap-1">
                    <button className="bg-[#F4F4F5] w-6 h-6 flex items-center justify-center text-[10px]">
                        <i className="fa-solid fa-chevron-left text-[8px]"></i>
                    </button>
                    <span className="bg-[#F4F4F5] font-bold px-2 py-1 text-[12px]">Today</span>
                    <button className="bg-[#F4F4F5] w-6 h-6 flex items-center justify-center text-[10px]">
                        <i className="fa-solid fa-chevron-right text-[8px]"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ScheduleFilters
