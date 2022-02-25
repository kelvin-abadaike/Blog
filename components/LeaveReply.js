import React from "react";

const LeaveReply = () => {
  const styles = {
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "1px solid gray",
    outline: "none",
    resize: "vertical",
  };
  return (
    <div className="my-5">
      <h3 className="text-2xl text-purple-500 pb-5">Leave A Reply</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="col-span-2 gap-5 grid-cols-2 grid">
          <div>
            <input
              type="text"
              placeholder="Name:"
              style={styles}
              className="w-full"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email:"
              style={styles}
              className="w-full"
            />
          </div>
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Message:"
              style={styles}
              className="w-full"
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <textarea style={styles} placeholder="Message:" className="w-full" rows={4}></textarea>
        </div>
      </div>
    </div>
  );
};

export default LeaveReply;

{
  /* <div>
          <input type="email" placeholder="Email:" style={styles} />
        </div> */
}
