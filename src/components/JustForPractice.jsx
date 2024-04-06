const JustForPractice = () => {
  return (
    // <span
    //   className={`d-inline-block lh-1 ff-sorts fs-300 fw-normal text-capitalize`}
    // >
    //   <span
    //     className={`d-inline-block position-relative overflow-hidden text-hover-animation-effect`}
    //   >
    //     j
    //     <span
    //       className={`d-inline-block position-absolute top-0 start-0 outer`}
    //     >
    //       <span className={`d-inline-block inner overflow-hidden`}>j</span>
    //     </span>
    //     {/* <div className={`inner position-absolute w-100 h-100 start-0`}>
    //     <span
    //       data-text="j"
    //       className={`lh-1 ff-sorts fs-300 fw-normal text-capitalize text-custom-color`}
    //     >
    //       j
    //     </span>
    //   </div> */}
    //   </span>
    // </span>
    <div>
      <div className="fill-text-hover-parent w-fit mx-auto">
        <h2
          data-text={"j"}
          className="fill-text-hover overflow-hidden  ff-sorts fw-normal fs-300 lh-1"
        >
          {"j"}
        </h2>
        {/* <p
          className="mb-0 mb-md-3 text-center fs-3 fw-medium text-color-black text-capitalize "
          data-aos="fade-right"
        >
          {content}
        </p> */}
        {/* <p
          className="mb-0 mb-md-3 text-center position-absolute bottom--30px start-50 translate-middle fs-3 fw-medium text-color-black text-capitalize text-nowrap"
          data-aos="fade-right"
        >
          {"j"}
        </p> */}
      </div>
    </div>
  );
};

export default JustForPractice;
