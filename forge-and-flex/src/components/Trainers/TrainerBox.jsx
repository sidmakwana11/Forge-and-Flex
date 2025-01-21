import Trainer1 from "../../images/trainers/trainer1.png";
import Trainer2 from "../../images/trainers/trainer2.png";
import Trainer3 from "../../images/trainers/trainer3.png";
import TrainerBg from "../../images/trainers/trainer-bg.png";
import Shape from "../../images/trainers/shape.png";


function TrainerBox() {

  const trainers = [
    { img: Trainer1, name: "John Lewis", job: "Yoga Trainer" },
    { img: Trainer2, name: "David Kingsbury", job: "Crossfit Trainer" },
    { img: Trainer3, name: "Tracy Anderson", job: "Personal Trainer" },
  ];

  return (
    <>
      <div
        className="flex justify-center gap-[5rem] md1200:flex-wrap"
        style={{ margin: "0 auto" }}
      >
        {trainers.map((train, id) => (
          <div
            key={id}
            className="relative cursor-pointer w-[35rem] min450:w-full flex flex-col select-none"
          >
            {/* trainer img */}
            <img
              src={train.img}
              alt="trainer"
              className={`w-[22rem] z-10 relative mx-auto `}
            />
            {/* trainer bg */}
            <img
              src={TrainerBg}
              alt="trainer_background"
              className={`absolute top-[4px] w-full scale-[1] `}
            />
            {/* trainer description */}
            <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px]">
              <img
                alt="shape"
                src={Shape}
                className="absolute -top-[25px] left-[113px]"
              />
              <i className="fa-solid fa-angle-up absolute -top-[16px] left-[162px] text-3xl"></i>
              <h3 className="font-bold text-[2.4rem] ">{train.name}</h3>
              <p className="font-medium text-[1.5rem] text-[#646464]">
                {train.job}
              </p>
              <div className="flex gap-8 text-[#646464] w-full justify-center mt-5 text-[1.6rem]">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TrainerBox;
