import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Desi Chicken (Cut)",
      price: 420,
      type: "Cut",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn1_MyEHvAGV-MCwu-STJEphwMjUKl3XRufiE9vmUgtyznVczJKYrZ20K7YQQ3O-vlKyCeNigzz1Z4AnbBiV3DUQyxcGNWngMp92Nkis1u&s=10",
      featured: true,
    },
    {
      id: 2,
      name: "Broiler Chicken (Live)",
      price: 280,
      type: "Live",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQy0-7FV28SsrySU847L6lH81DHxKzCs8XQ&s",
      featured: true,
    },
    {
      id: 3,
      name: "Desi Eggs (Tray)",
      price: 210,
      type: "Eggs",
      image:
        "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=800&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 4,
      name: "Desi Eggs (Tray)",
      price: 210,
      type: "Eggs",
      image:
        "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=800&auto=format&fit=crop",
      featured: true,
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
