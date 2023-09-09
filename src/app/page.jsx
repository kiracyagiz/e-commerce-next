import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
    <main className=" p-8 flex flex-col md:flex-row justify-between mt-12 ">
      <div className="md:w-1/2  mt-20 max-w-lg ">
        <p className="text-3xl mb-4">E-COMMERCE FASHION</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error
          libero quos provident modi, nam pariatur inventore ipsa, cum quis
          natus quod explicabo blanditiis, sit nesciunt possimus doloremque
          delectus laboriosam ipsum tempora! Tempora rerum, natus impedit
          deleniti exercitationem numquam deserunt veniam tempore delectus nam
          eos possimus consectetur nobis id aut?
        </p>
      </div>
      <div className=" mt-0 md:mt-18 md:w-1/2">
        <img src='https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?w=1060&t=st=1694032877~exp=1694033477~hmac=ee31cfb775bb6232aa2a6939aa8ff9677ea5540db68ae2384eec7d861843b085' alt="" />
      </div>
    </main></>
  );
}
