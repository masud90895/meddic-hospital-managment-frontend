"use client";
import {
  useGetAppointmentLengthQuery,
  useGetMyAppointmentLengthQuery,
} from "@/Redux/features/bookingApi/bookingApi";
import Skeleton from "@/components/Loader/Skeleton";
import { USER_ROLE } from "@/constant/role";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const Dashboard = () => {
  const user: any = getUserInfo();

  // USER all appoinment
  const { data, isLoading } = useGetAppointmentLengthQuery(undefined);

  const { data: myAppointmentLength, isLoading: AppointmentLoading } =
    useGetMyAppointmentLengthQuery(undefined);

  let dashboardData = null;

  if (user?.role === USER_ROLE.USER) {
    dashboardData = (
      <div>
        {AppointmentLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
              {/* Body */}
              <div className="p-5 grow flex justify-between items-center">
                <dl className="space-y-1">
                  <dt className="text-2xl font-bold">
                    {myAppointmentLength?.pending}
                  </dt>
                  <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                    Pending appointment
                  </dd>
                </dl>
              </div>
              {/* END Body */}
            </div>

            {/* card two */}
            <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
              {/* Body */}
              <div className="p-5 grow flex justify-between items-center">
                <dl className="space-y-1">
                  <dt className="text-2xl font-bold">
                    {myAppointmentLength?.rejected}
                  </dt>
                  <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                    Rejected appointment
                  </dd>
                </dl>
              </div>
              {/* END Body */}
            </div>
          </div>
        )}
      </div>
    );
  } else if (
    user?.role === USER_ROLE.ADMIN ||
    user?.role === USER_ROLE.SUPER_ADMIN
  ) {
    dashboardData = (
      <div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <Skeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
              {/* Body */}
              <div className="p-5 grow flex justify-between items-center">
                <dl className="space-y-1">
                  <dt className="text-2xl font-bold">{data}</dt>
                  <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                    User all appointment
                  </dd>
                </dl>
              </div>
              {/* END Body */}
            </div>
          </div>
        )}
      </div>
    );
  }

  return <>{dashboardData}</>;
};

export default Dashboard;
