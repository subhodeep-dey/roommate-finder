import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ListingContext = createContext(null);

export const ListingContextProvider = (props) => {
  const [roommateList, setRoommateList] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [cartItems2, setCartItems2] = useState({});
  const [selectedRoommateCards, setSelectedRoommateCards] = useState([]);
  const [selectedRoomCards, setSelectedRoomCards] = useState([]);
  const [showModal, setShowModel] = useState(false);
  const [showModal2, setShowModel2] = useState(false);
  const [seletedroommatedetail, setSelectedRoommateDetail] = useState(null);
  const [seletedroomdetail, setSelectedRoomDetail] = useState(null);
  const [seletedroommatephone, setSelectedRoommatePhone] = useState(null);
  const [seletedroomphone, setSelectedRoomPhone] = useState(null);
  const [seletedroommateemail, setSelectedRoommateEmail] = useState(null);
  const [seletedroomemail, setSelectedRoomEmail] = useState(null);

  const getDefaultCart2 = (roommateList) => {
    let cart = {};
    for (const roommateId in roommateList) {
      cart[roommateId] = 0;
      // console.log(roommateId);
    }
    return cart;
  };
  const getDefaultCart = (roomList) => {
    let cart = {};
    for (const roomId in roomList) {
      cart[roomId] = 0;
      // console.log(roomId);
    }
    return cart;
  };

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/roommate/all`)
  //     .then((response) => {
  //       const roommatePostsWithUserDetailsPromises = response.data.map(
  //         (post) => {
  //           return axios
  //             .get(
  //               `${process.env.REACT_APP_SERVER_URL}/user/${post.userId}`
  //             )
  //             .then((userResponse) => {
  //               const userDetails = userResponse.data;
  //               return {
  //                 ...post,
  //                 userDetails,
  //               };
  //             });
  //         }
  //       );

  //       return Promise.all(roommatePostsWithUserDetailsPromises);
  //     })
  //     .then((roommatePostsWithUserDetails) => {
  //       console.log("Roommate post details:", roommatePostsWithUserDetails);
  //       setRoommateList(roommatePostsWithUserDetails);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/room/all`)
  //     .then((response) => {
  //       const roomPostsWithUserDetailsPromises = response.data.map((post) => {
  //         return axios
  //           .get(`${process.env.REACT_APP_SERVER_URL}/user/${post.userId}`)
  //           .then((userResponse) => {
  //             const userDetails = userResponse.data;
  //             return {
  //               ...post,
  //               userDetails,
  //             };
  //           });
  //       });

  //       return Promise.all(roomPostsWithUserDetailsPromises);
  //     })
  //     .then((roomPostsWithUserDetails) => {
  //       setRoomList(roomPostsWithUserDetails);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    setCartItems(getDefaultCart(roomList));
    setCartItems2(getDefaultCart2(roommateList));
  }, [roomList, roommateList]);

  const selectRoommateDetail = (RoommateDetail) => {
    // console.log(RoommateDetail);
    const roommateHabits = roommateList.find((post) => {
      return post === RoommateDetail;
    });

    setSelectedRoommateDetail(RoommateDetail);
    // console.log(setSelectedRoommateDetail);
    setShowModel(true);
  };
  const selectRoommatePhone = (RoommatePhone) => {
    // console.log(RoommateDetail);
    const roommatephoneNo = roommateList.find((post) => {
      return post === RoommatePhone;
    });

    setSelectedRoommatePhone(RoommatePhone);
    // console.log(setSelectedRoommateDetail);
    setShowModel(true);
  };
  const selectRoommateEmail = (RoommateEmail) => {
    // console.log(RoommateDetail);
    const roommateemailid = roommateList.find((post) => {
      return post === RoommateEmail;
    });

    setSelectedRoommateEmail(RoommateEmail);
    // console.log(setSelectedRoommateDetail);
    setShowModel(true);
  };

  const selectRoomDetail = (RoomDetail) => {
    // console.log(RoomDetail);
    const roomHabits = roommateList.find((post) => {
      return post === RoomDetail;
    });

    setSelectedRoomDetail(RoomDetail);
    // console.log(setSelectedRoomDetail);
    setShowModel2(true);
  };
  const selectRoomPhone = (RoomPhone) => {
    // console.log(RoomDetail);
    const roomPhone = roommateList.find((post) => {
      return post === RoomPhone;
    });

    setSelectedRoomPhone(RoomPhone);
    // console.log(setSelectedRoomDetail);
    setShowModel2(true);
  };
  const selectRoomEmail = (RoomEmail) => {
    // console.log(RoomDetail);
    const roomEmail = roommateList.find((post) => {
      return post === RoomEmail;
    });

    setSelectedRoomEmail(RoomEmail);
    // console.log(setSelectedRoomDetail);
    setShowModel2(true);
  };
  const closeModal = () => {
    setShowModel(false);
    setShowModel2(false);
  };
  const closeModal2 = () => {
    setShowModel2(false);
  };

  const addToCart = (itemId) => {
    if (cartItems[itemId] === 1) {
      alert("You already selected this person.");
      return;
    }

    setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    setSelectedRoommateCards((prev) => [...prev, itemId]);
  };
  const addToCart2 = (itemId) => {
    if (cartItems2[itemId] === 1) {
      alert("you already selected this room.");
      return;
    }

    setCartItems2((prev) => ({ ...prev, [itemId]: 1 }));
    setSelectedRoomCards((prev) => [...prev, itemId]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    cartItems,
    cartItems2,
    addToCart,
    addToCart2,
    removeFromCart,
    selectedRoommateCards,
    selectedRoomCards,
    showModal,
    setShowModel,
    selectRoommateDetail,
    selectRoommatePhone,
    seletedroommatedetail,
    selectRoomDetail,
    seletedroomdetail,
    closeModal,
    showModal2,
    setShowModel2,
    closeModal2,
    seletedroommatephone,
    setSelectedRoommatePhone,
    seletedroomphone,
    setSelectedRoomPhone,
    seletedroommateemail,
    setSelectedRoommateEmail,
    seletedroomemail,
    setSelectedRoomEmail,
    selectRoommateEmail,
    selectRoomPhone,
    selectRoomEmail,
  };
  // console.log(cartItems);
  // console.log(cartItems2);

  return (
    <ListingContext.Provider value={contextValue}>
      {props.children}
    </ListingContext.Provider>
  );
};
