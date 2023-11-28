import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Bed from "../../Assets/bed.svg";
import BoldBed from "../../Assets/bold-bed.svg";
import BoldPeople from "../../Assets/bold-people.svg";
import People from "../../Assets/people.svg";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/Navbar";
import "./NeedRoom.css";
import Alert from "@mui/material/Alert";

const profileData = JSON.parse(localStorage.getItem("profile"));

const initialNeedRoomFormState = {
  rank: "",
  // gender: "M",
  bedType: "",
  preferedBlocks: ["A"],
  contactNumber: "",
  year: "1",
  description: "",
  remaining: "",
};
const initialNeedRoomMateFormState = {
  rank: "",
  // gender: "M",
  noOfBeds: "",
  preferedBlocks: ["A"],
  contactNumber: "",
  year: "1",
  description: "",
  remaining: "",
};

function NeedRoom() {
  const [needRoom, setNeedRoom] = useState(true);
  const [needRoomForm, setNeedRoomForm] = useState(initialNeedRoomFormState);
  const [needRoomMateForm, setNeedRoomMateForm] = useState(
    initialNeedRoomMateFormState
  );
  const [blocks, setBlocks] = useState([]);
  const user = useSelector((state) => state.authReducer.authData);
  const navigate = useNavigate();
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  useEffect(() => {
    if (profileData && profileData.user.gender) {
      const userGender = profileData.user.gender;
      if (userGender === "F") {
        setBlocks(["A", "B", "C", "D", "E", "F", "G", "H"]);
      } else if (userGender === "M") {
        setBlocks([
          "A",
          "B",
          "B ANNEX",
          "C",
          "D",
          "D ANNEX",
          "E",
          "F",
          "G",
          "H",
          "J",
          "K",
          "L",
          "M",
          "M ANNEX",
          "N",
          "P",
          "Q",
          "R",
        ]);
      }
      else {
        setShowPlaceholder(true);
      }
    } else {
      // If user's gender is not present in local storage, fetch it from the API
      const fetchUserGender = async () => {
        try {
          const userId = profileData.user._id;
          const response = await axios.get(
            `https://roommate-finder-theta.vercel.app/user/${userId}`
          );
          const userGender = response.data.gender;

          if (userGender === "F") {
            setBlocks(["A", "B", "C", "D", "E", "F", "G", "H"]);
          } else if (userGender === "M")  {
            setBlocks([
              "A",
              "B",
              "B ANNEX",
              "C",
              "D",
              "D ANNEX",
              "E",
              "F",
              "G",
              "H",
              "J",
              "K",
              "L",
              "M",
              "M ANNEX",
              "N",
              "P",
              "Q",
              "R",
            ]);
          }
          else {
            setShowPlaceholder(true);
          }
        } catch (error) {
          console.error("Error fetching user gender:", error);
          setShowPlaceholder(true);
        }
      };

      fetchUserGender();
    }
  }, [profileData]);

  function needRoomClickHandler(trigger) {
    if (trigger === "room") {
      setNeedRoom(true);
    } else {
      setNeedRoom(false);
    }
  }

  function needRoomFormOnChangeHandler(e, index) {
    let { name, value } = e.target;
    if (name === "prefferedBlocks") {
      setNeedRoomForm((prev) => {
        const updatedBlocks = [...prev.preferedBlocks];
        updatedBlocks[index] = value;
        return { ...prev, preferedBlocks: updatedBlocks };
      });
    }

    //manage gender  state
    let gender = e.target.getAttribute("data-gender");
    if (gender) {
      let change = {};
      change["gender"] = gender;
      setNeedRoomForm((prev) => {
        return { ...prev, ...change };
      });
    }

    let change = {};
    change[name] = value;
    setNeedRoomForm((prev) => {
      return { ...prev, ...change };
    });
  }

  function needRoomMateFormOnChangeHandler(e, index) {
    let { name, value } = e.target;
    //manage preferred blocks state
    if (name === "prefferedBlocks") {
      setNeedRoomMateForm((prev) => {
        const updatedBlocks = [...prev.preferedBlocks];
        updatedBlocks[index] = value;
        return { ...prev, preferedBlocks: updatedBlocks };
      });
    }

    // let gender = e.target.getAttribute("data-gender");
    // if (gender) {
    //   let change = {};
    //   change["gender"] = gender;
    //   setNeedRoomMateForm((prev) => {
    //     return { ...prev, ...change };
    //   });
    // }

    let change = {};
    change[name] = value;
    setNeedRoomMateForm((prev) => {
      return { ...prev, ...change };
    });
  }

  function countCharacters(str) {
    return str.replace(/\s/g, "").length;
  }

  async function needRoomSubmitHandler() {
    if (!validateNeedRoomForm()) {
      return;
    }

    try {
      let userId = user?.user?._id;
      const requestData = {
        userId: userId,
      };
      // Make an API request to get the user's room postings
      const response = await axios.post(
        `https://roommate-finder-theta.vercel.app/room/my/${userId}`,
        requestData
      );

      // Check the number of existing room postings
      const numberOfRoomPosts = response.data.length;

      // If the user has 7 or more room postings, prevent form submission
      if (numberOfRoomPosts >= 7) {
        toast.error(
          "You cannot create more than 7 room postings. Try deleting one of your existing room postings."
        );
        return;
      }

      if (countCharacters(needRoomForm.description) > 1000) {
        toast.error("Description should not exceed 1000 characters.");
        return;
      }

      let requestBody = {
        userId: userId,
        username: profileData.user.username,
        rank: needRoomForm?.rank,
        gender: profileData.user.gender,
        preferredBed: needRoomForm?.bedType,
        preferredBlock: needRoomForm?.preferedBlocks[0],
        phone: needRoomForm?.contactNumber,
        year: needRoomForm?.year,
        desc: needRoomForm?.description,
        remaining:needRoomForm?.remaining
      };

      let result = await axios.post(
        `https://roommate-finder-theta.vercel.app/room/${userId}`,
        requestBody
      );

      // console.log("API Response:", result.data);
      toast.success("Room created successfully!");
      navigate("/home");
    } catch (error) {
      toast.error("Error creating room.");
      // console.error("API Error:", error);
    }
  }

  async function needRoomMateSubmitHandler() {
    if (!validateNeedRoomMateForm()) {
      return;
    }
    let userId = user?.user?._id;

    let requestBody = {
      userId: userId,
      username: profileData.user.username,
      rank: needRoomMateForm?.rank,
      gender: profileData.user.gender,
      preferredBed: needRoomMateForm?.noOfBeds,
      preferredBlock: needRoomMateForm?.preferedBlocks[0],
      phone: needRoomMateForm?.contactNumber,
      year: needRoomMateForm?.year,
      desc: needRoomMateForm?.description,
      remaining:needRoomMateForm?.remaining
    };

    try {
      const requestData = {
        userId: userId,
      };
      // Make an API request to get the user's roommate postings
      const response = await axios.post(
        `https://roommate-finder-theta.vercel.app/roommate/my/${userId}`,
        requestData
      );

      // Check the number of existing roommate postings
      const numberOfRoommatePosts = response.data.length;

      // If the user has 7 or more roommate postings, prevent form submission
      if (numberOfRoommatePosts >= 7) {
        toast.error(
          "You cannot create more than 7 roommate postings. Try deleting one of your existing roommate postings."
        );
        return;
      }

      if (countCharacters(needRoomMateForm.description) > 1000) {
        toast.error("Description should not exceed 1000 characters.");
        return;
      }

      // Proceed with form submission if the user has less than 7 roommate postings
      let result = await axios.post(
        `https://roommate-finder-theta.vercel.app/roommate/${userId}`,
        requestBody
      );

      // console.log("API Response:", result.data);
      toast.success("Roommate created successfully!");
      navigate("/home");
    } catch (error) {
      toast.error("Error creating roommate.");
      // console.error("API Error:", error);
    }
  }

  function validateNeedRoomForm() {
    const numericRegex = /^[0-9]+$/;
    const indianNumberRegex = /^[6789]\d{9}$/;
    if (!needRoomForm["rank"]) {
      toast.error("Plase enter your rank");
      return false;
    } else if (
      !needRoomForm["bedType"] ||
      !["1", "2", "3", "4", "6", "8"].includes(needRoomForm["bedType"])
    ) {
      toast.error("Please enter valid bed type (1, 2, 3, 4, 6, 8)");
      return false;
    } else if (
      !needRoomForm["contactNumber"] ||
      !indianNumberRegex.test(needRoomForm["contactNumber"]) ||
      needRoomForm["contactNumber"].length !== 10
    ) {
      toast.error("Please enter a valid 10-digit Contact number");
      return false;
    } else if (!needRoomForm["year"]) {
      toast.error("Please enter your year");
      return false;
    } else if (
      !needRoomForm["year"] ||
      !["1", "2", "3", "4"].includes(needRoomForm["year"])
    ) {
      toast.error("Please enter a valid year (1, 2, 3, or 4)");
      return false;
    }

    if (needRoomForm["rank"]) {
      let isRankValid = numericRegex.test(needRoomForm["rank"]);
      if (!isRankValid) {
        toast.error("Please enter a valid rank");
        return false;
      }
      let isRankAbove5 = needRoomForm["rank"].length > 5 ? true : false;
      if (isRankAbove5) {
        toast.error("Please enter a valid rank");
        return false;
      }
    } else if (needRoomForm["bedType"]) {
      let isBedTypeValid = numericRegex.test(needRoomForm["bedType"]);
      if (!isBedTypeValid) {
        toast.error("Please enter a valid bed type");
        return false;
      }
    } else if (needRoomForm["contactNumber"]) {
      let isContactNumberValid = indianNumberRegex.test(
        needRoomForm["contactNumber"]
      );
      if (!isContactNumberValid) {
        toast.error("Please enter a valid Contact number");
        return false;
      }
    } else if (needRoomForm["preferedBlocks"]) {
      let isValid = areValuesUnique(needRoomForm["preferedBlocks"]);
      if (!isValid) {
        toast.error("Please choose block");
        return false;
      }
    }
    return true;
  }

  function validateNeedRoomMateForm() {
    const numericRegex = /^[0-9]+$/;
    const indianNumberRegex = /^[6789]\d{9}$/;

    if (!needRoomMateForm["rank"]) {
      toast.error("Please enter your rank");
      return false;
    } else if (
      !needRoomMateForm["noOfBeds"] ||
      !["1", "2", "3", "4", "6", "8"].includes(needRoomMateForm["noOfBeds"])
    ) {
      toast.error("Please enter a valid number of beds (1, 2, 3, 4, 6, 8)");
      return false;
    } else if (
      !needRoomMateForm["contactNumber"] ||
      !indianNumberRegex.test(needRoomMateForm["contactNumber"]) ||
      needRoomMateForm["contactNumber"].length !== 10
    ) {
      toast.error("Please enter a valid 10-digit Contact number");
      return false;
    } else if (
      !needRoomMateForm["year"] ||
      !["1", "2", "3", "4"].includes(needRoomMateForm["year"])
    ) {
      toast.error("Please enter a valid year (1, 2, 3, or 4)");
      return false;
    }

    if (needRoomMateForm["rank"]) {
      let isRankValid = numericRegex.test(needRoomMateForm["rank"]);
      if (!isRankValid) {
        toast.error("Please enter a valid rank");
        return false;
      }

      let isRankAbove5 = needRoomForm["rank"].length > 5 ? true : false;
      if (isRankAbove5) {
        toast.error("Please enter a valid rank");
        return false;
      }
    } else if (needRoomMateForm["noOfBeds"]) {
      let isNoOfBedsValid = numericRegex.test(needRoomMateForm["noOfBeds"]);
      if (!isNoOfBedsValid) {
        toast.error("Please enter a valid number of beds (1, 2, 3, 4, 6, 8)");
        return false;
      }
    } else if (needRoomMateForm["contactNumber"]) {
      let isContactNumberValid = indianNumberRegex.test(
        needRoomMateForm["contactNumber"]
      );
      if (!isContactNumberValid) {
        toast.error("Please enter a valid Contact number");
        return false;
      }
    } else if (needRoomMateForm["preferedBlocks"]) {
      let isValid = areValuesUnique(needRoomMateForm["preferedBlocks"]);
      if (!isValid) {
        toast.error("Please choose block");
        return false;
      }
    }
    return true;
  }

  function areValuesUnique(arr) {
    const uniqueSet = new Set();
    for (const value of arr) {
      if (uniqueSet.has(value)) {
        return false;
      }
      uniqueSet.add(value);
    }
    return true;
  }

  return (
    <Fragment>
      <Navbar />
      <div className="m-auto w-[90vw]">
        {/* navbar */}
        <div className="flex pt-4 pb-2 px-2 border-b-2 border-[#7E8490]">
          <div
            className="flex flex-col items-center cursor-pointer"
            data-name="room"
            onClick={() => needRoomClickHandler("room")}
          >
            <img
              alt="bedlogo"
              className="h-[35px]"
              src={needRoom ? BoldBed : Bed}
            />
            <span
              className={`${
                needRoom ? "border-b-2 border-b-[#000] font-[600]" : ""
              } pb-1`}
            >
              Need Room
            </span>
          </div>
          <div
            className="flex flex-col items-center ml-6 cursor-pointer"
            onClick={needRoomClickHandler}
          >
            <img
              alt="roomlogo"
              className="h-[35px]"
              src={!needRoom ? BoldPeople : People}
            />
            <span
              className={`${
                !needRoom ? "border-b-2 border-b-[#000] font-[600]" : ""
              } pb-1`}
            >
              Need Roommates
            </span>
          </div>
        </div>
        {/* form */}
        {showPlaceholder ? (
          <div align="center">
            <Alert severity="warning">
              Please complete your profile before using this application. If you have already completed the profile
              and still see this message, please goto your profile and click on "Submit" button again.
            </Alert>
            <br />
            <p>
              If you face any problem, please report to us at
              <br />
              mozillavit@gmail.com
            </p>
          </div>
        ) : needRoom ? (
          <div className="w-[100%]">
            <h1 className="mb-4 mt-5">Looking for Room</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap:4  md:gap:4 lg:gap-8">
              <div
                style={{ gridAutoRows: "120px" }}
                className="grid grid-cols-1 items-center"
              >
                <div className="flex flex-col mb-6 md:mr-4">
                  <span>Your Rank *</span>
                  <input
                    name="rank"
                    value={needRoomForm["rank"]}
                    onChange={needRoomFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
                <div className="flex flex-col mb-6 md:mr-4">
                  <span>Prefered Bed Type*</span>
                  <input
                    name="bedType"
                    value={needRoomForm["bedType"]}
                    onChange={needRoomFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
                <div className="flex flex-col mb-6 md:mr-4">
                  <span>Contact Number*</span>
                  <input
                    name="contactNumber"
                    value={needRoomForm["contactNumber"]}
                    onChange={needRoomFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
                <div className="flex md:hidden flex-col mb-6 ">
                  <span>Year*</span>
                  <input
                    name="year"
                    value={needRoomForm["year"]}
                    onChange={needRoomFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
              </div>
              <div
                style={{ gridAutoRows: "120px" }}
                className="grid grid-cols-1 items-center"
              >
                <div className="containerr max-h-[80px]">
                  <div className="label">Prefered Block*</div>
                  <div className="flex gap-6">
                    <div className="bg-[#D9D9D9] rounded-[10px] flex items-center">
                      <select
                        name="prefferedBlocks"
                        value={needRoomForm["preferedBlocks"][0]}
                        onChange={(e) => needRoomFormOnChangeHandler(e, 0)}
                        className="bg-[transparent] w-[100%] py-3 px-6 outline-none focus:border-none cursor-pointer"
                      >
                        {blocks.map((block) => (
                          <option key={block} value={block}>
                            {block}
                          </option>
                          //   <option>{`${block}-Block`}</option>
                        ))}
                      </select>
                    </div>

                    <div className="hidden bg-[#D9D9D9] rounded-[10px] flex items-center ">
                      <select
                        name="prefferedBlocks"
                        value={needRoomForm["preferedBlocks"][1]}
                        onChange={(e) => needRoomFormOnChangeHandler(e, 1)}
                        className="bg-[transparent] w-[100%] py-3 px-6 outline-none focus:border-none cursor-pointer "
                      >
                        {blocks.map((block) => (
                          <option key={block} value={block}>
                            {block}
                          </option>
                          //   <option>{`${block}-Block`}</option>
                        ))}
                      </select>
                    </div>

                    <div className="hidden bg-[#D9D9D9] rounded-[10px] flex items-center">
                      <select
                        name="prefferedBlocks"
                        value={needRoomForm["preferedBlocks"][2]}
                        onChange={(e) => needRoomFormOnChangeHandler(e, 2)}
                        className="bg-[transparent] w-[100%] py-3 px-6 outline-none focus:border-none cursor-pointer "
                      >
                        {blocks.map((block) => (
                          <option key={block} value={block}>
                            {block}
                          </option>
                          //   <option>{`${block}-Block`}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col mb-6 ">
                  <span>Year*</span>
                  <input
                    name="year"
                    value={needRoomForm["year"]}
                    onChange={needRoomFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
                <div className="flex flex-col mb-6 md:mr-4">
                  <span>Vacancy</span>
                  <input
                    name="remaining"
                    value={needRoomForm["remaining"]}
                    onChange={needRoomFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
              </div>
            </div>
            <div className="containerr w-[100%] mb-6 mt-6 md:mt-2">
              <div className="label">Description</div>
              <textarea
                rows="3"
                className="w-[100%] focus:border-none outline-none"
                name="description"
                value={needRoomForm["description"]}
                onChange={needRoomFormOnChangeHandler}
              ></textarea>
            </div>
            <div className="w-[100%] flex justify-center mb-6 mt-6">
              <button
                onClick={needRoomSubmitHandler}
                className="mx-auto bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start disabled:hover:cursor-not-allowed"
              >
                {" "}
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[100%]">
            <h1 className="mb-4 mt-5">Have Room & looking for Roommate</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  md:gap:4 lg:gap-8">
              <div
                style={{ gridAutoRows: "120px" }}
                className="grid grid-cols-1 items-center"
              >
                <div className="flex flex-col mb-6">
                  <span>Your Rank *</span>
                  <input
                    name="rank"
                    value={needRoomMateForm["rank"]}
                    onChange={needRoomMateFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <span>No of Beds*</span>
                  <input
                    name="noOfBeds"
                    value={needRoomMateForm["noOfBeds"]}
                    onChange={needRoomMateFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <span>Contact Number*</span>
                  <input
                    name="contactNumber"
                    value={needRoomMateForm["contactNumber"]}
                    onChange={needRoomMateFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
                <div className="flex md:hidden flex-col mb-6 ">
                  <span>Year*</span>
                  <input
                    name="year"
                    value={needRoomMateForm["year"]}
                    onChange={needRoomMateFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
              </div>
              <div
                style={{ gridAutoRows: "120px" }}
                className="grid grid-cols-1 items-center"
              >
                <div className="containerr max-h-[80px]">
                  <div className="label">Prefered Block*</div>
                  <div className="flex gap-6">
                    <div className="bg-[#D9D9D9] rounded-[10px] flex items-center">
                      <select
                        name="prefferedBlocks"
                        value={needRoomMateForm["preferedBlocks"][0]}
                        onChange={(e) => needRoomMateFormOnChangeHandler(e, 0)}
                        className="bg-[transparent] w-[100%] py-3 px-6 outline-none focus:border-none cursor-pointer"
                      >
                        {blocks.map((block) => (
                          <option key={block} value={block}>
                            {block}
                          </option>
                          //   <option>{`${block}-Block`}</option>
                        ))}
                      </select>
                    </div>

                    <div className="hidden bg-[#D9D9D9] rounded-[10px] flex items-center ">
                      <select
                        name="prefferedBlocks"
                        value={needRoomMateForm["preferedBlocks"][1]}
                        onChange={(e) => needRoomMateFormOnChangeHandler(e, 1)}
                        className="bg-[transparent] w-[100%] py-3 px-6 outline-none focus:border-none cursor-pointer "
                      >
                        {blocks.map((block) => (
                          <option key={block} value={block}>
                            {block}
                          </option>
                          //   <option>{`${block}-Block`}</option>
                        ))}
                      </select>
                    </div>

                    <div className="hidden bg-[#D9D9D9] rounded-[10px] flex items-center">
                      <select
                        name="prefferedBlocks"
                        value={needRoomMateForm["preferedBlocks"][2]}
                        onChange={(e) => needRoomMateFormOnChangeHandler(e, 2)}
                        className="bg-[transparent] w-[100%] py-3 px-6 outline-none focus:border-none cursor-pointer "
                      >
                        {blocks.map((block) => (
                          <option key={block} value={block}>
                            {block}
                          </option>
                          //   <option>{`${block}-Block`}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col mb-6 ">
                  <span>Year*</span>
                  <input
                    name="year"
                    value={needRoomMateForm["year"]}
                    onChange={needRoomMateFormOnChangeHandler}
                    className="bg-[#D9D9D9] rounded-[8px] mt-1 h-[3rem] p-4"
                  />
                </div>
              </div>
            </div>
            <div className="containerr w-[100%] mb-6 mt-6 md:mt-2">
              <div className="label">Description</div>
              <textarea
                rows="3"
                className="w-[100%] focus:border-none outline-none"
                name="description"
                value={needRoomMateForm["description"]}
                onChange={needRoomMateFormOnChangeHandler}
              ></textarea>
            </div>
            <div className="w-[100%] flex justify-center mb-6 mt-6">
              <button
                onClick={needRoomMateSubmitHandler}
                className="mx-auto bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start disabled:hover:cursor-not-allowed"
              >
                {" "}
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  );
}

export default NeedRoom;