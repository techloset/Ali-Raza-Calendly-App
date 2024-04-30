// import React from "react";

// interface ButtonProps {
//   name: string;
//   onClick: () => void;
//   loading: boolean;
// }
// const Button = ({ name, onClick , loading }: ButtonProps) => {
//   return (
//     <div>
//       <button
//         className="h-[44px] w-auto bg-[#0069FF] hover:bg-[#0069FF] text-white font-bold py-2 px-4 rounded-3xl"
//         type="button"
//         onClick={onClick}
//       >
//         {loading > (

//         ):(

//           {name}
//         )}
//       </button>
//     </div>
//   );
// };

// export default Button;

import React from "react";

interface ButtonProps {
  name: string;
  onClick: () => void;
  loading: boolean;
}

const Button = ({ name, onClick, loading }: ButtonProps) => {
  return (
    <div>
      <button
        className={`h-[44px] w-auto bg-[#0069FF] hover:bg-[#0069FF] text-white font-bold py-2 px-4 rounded-3xl ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="button"
        onClick={onClick}
        disabled={loading}
      >
        {loading ? <span className="text-white">Loading...</span> : name}
      </button>
    </div>
  );
};

export default Button;
