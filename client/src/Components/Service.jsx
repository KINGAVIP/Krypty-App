import { MdOutlineSecurity } from "react-icons/md";
import { CiBadgeDollar } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
const Service = () => {
  const ServiceCard = ({ title, icon, subtitle, color }) => {
    return (
      <div className=" flex items-center p-2 border-2 rounded-lg border-gray-600 hover:border-transparent  cursor-pointer transition ease-in-out delay-100">
        <div
          className={`p-3 rounded-full flex justify-center items-center text-[${color}] text-xl `}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className=" font-light text-gray-300 text-md">{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="container flex-col" id="Services">
      <div className="grid grid-cols-2 grid-flow-col">
        <div className=" flex justify-center items-center">
          <h3 className=" text-6xl font-serif w-3/4 hover:italic">
            Services that we continue to provide
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <ServiceCard
            icon={<MdOutlineSecurity />}
            color={"#000066"}
            title={"Security Gauranteed"}
            subtitle={
              "security is gauranteed, with maintain privacy and quality of trust"
            }
          />
          <ServiceCard
            icon={<CiBadgeDollar />}
            title={"Smart Contract Development"}
            subtitle={
              "Revolutionizing Business Operations with the Creation and Implementation of Self-Executing Contracts, Automating Processes."
            }
          />
          <ServiceCard
            icon={<GrTransaction />}
            title={"Blockchain Transaction Services"}
            subtitle={
              "Revolutionizing Financial Interactions with Swift, Secure, and Transparent Transactions on the Blockchain"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
