import React from "react";

const RecentComments = () => {
  return (
    <div className="text-white">
      <div className="mb-6">
        <h3 className="text-2xl ">Recent Comments</h3>
      </div>

      {[0, 1].map((e) => (
        <div>
          <div className="grid grid-cols-2 place-content-start">
            <div>Mohins</div>
            <div>09 Jan 2022</div>
          </div>
          <div className="my-4">
            <p>
              sed ultricies vehicula. Ut commodo dui vel eros scelerisque
              facilisis. Phasellus non blandit magna. Suspendisse sit amet arcu
              nec libero sagittis tempus
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RecentComments;

{
  /* <div>
          <div className="grid grid-cols-2">
            <div>
                Mohins
            </div>
            <div>
                09 Jan 2022
            </div>
          </div>
          <div className="my-4">
            <p>
            sed ultricies vehicula. Ut commodo dui vel eros
            scelerisque facilisis. Phasellus non blandit magna. Suspendisse sit
            amet arcu nec libero sagittis tempus
            </p>
          </div>
      </div> */
}
