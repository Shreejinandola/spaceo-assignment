
"use client"
import CalendarTable from "./componet/CalendarTable";
import ClientAssign from "./componet/ClientAssign";
import ScheduleFilters from "./componet/ScheduleFilters";
import ScheduleHeader from "./componet/ScheduleHeader";

export default function ClientInfo() {
    return (
        <main className="min-h-screen bg-black flex items-center justify-center py-12 px-4 font-[Inter]">
            <div className="w-full max-w-[1152px] bg-white rounded-[15px] min-h-[710px]">
                <div className="w-full">
                    {/* Calendar Header */}
                    <ScheduleHeader />
                    {/* Main Layout */}
                    <div className="flex flex-col md:flex-row">
                        {/* Calendar Table filter view */}
                        <div className="w-full md:w-8/12 border-r border-[#EEEFF1]">
                            {/* Calendar filter part*/}
                            <ScheduleFilters />
                            {/* Calendar Table */}
                            <CalendarTable />
                        </div>
                        {/* Client filter with assign or not assign task */}
                        <ClientAssign />
                    </div>
                </div>
            </div>
        </main>
    );
}
