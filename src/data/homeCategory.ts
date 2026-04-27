import { Category } from "@mui/icons-material";

export const homeCategory = [
  {
    name: "Men",
    categoryId: "men",
    level: 1,
    levelTwoCategory: [
      {
        name: "Topwere",
        categoryId: "men_topwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Bottomwere",
        categoryId: "men_bottomwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Innerwere And Sleepwere",
        categoryId: "men_innerwear_and_sleepwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Footwere",
        categoryId: "men_footwear",
        parentCategoryId: "men",
        level: 2,
      },
           {
        name: "Personal Care And Grooming",
        categoryId: "men_persional_care_and_grooming",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Fashion Accessories",
        categoryId: "men_fashion_accessories",
        parentCategoryId: "men",
        level: 2,
      }
    ],
  },

  {
    name: "Women", 
    categoryId: "women",
    level:1,
    levelTwoCategory:[
    {
      name: "Indian & Fusion Wear",
      categoryId: "women_indian_and_fusion_wear",
      parentCategoryId: "women",
      level: 2
    },
    {
      name: "Western Wear",
      categoryId: "women_western_wear",
      parentCategoryId: "women",
      level: 2
    },
    {
      name: "Lingerie & Sleepwear",
      categoryId: "women_lingerie_sleepwear",
      parentCategoryId: "women",
      level: 2
    },
    {
      name: "Footwear",
      categoryId: "women_footwear",
      parentCategoryId: "women",
      level: 2
    },
    {
      name: "Beauty & Personal Care",
      categoryId: "women_beauty_personal_care",
      parentCategoryId: "women",
      level: 2
    },
    {
      name: "Jewellery",
      categoryId: "women_jewellery",
      parentCategoryId: "women",
      level: 2
    },
    {
      name: "Accessories",
      categoryId: "women_accessories",
      parentCategoryId: "women",
      level: 2
    }
    ]
  },

  {
    name:"Home & Furniture",
    categoryId: "home_furniture",
    level:1,
  },

  {
    name:"Electronics", 
    categoryId: "electronics",
    level:1,
    levelTwoCategory: [
      {
        name: "Mobiles & Accessories",
        categoryId: "electronics_mobiles_accessories",
        parentCategoryId: "electronics",
        level: 2
      },
      {
        name: "Laptops & Computers",
        categoryId: "electronics_laptops_computers",
        parentCategoryId: "electronics",
        level: 2
      },
      {
        name: "TV & Home Entertainment",
        categoryId: "electronics_tv_home_entertainment",
        parentCategoryId: "electronics",
        level: 2
      },
      {
        name: "Audio Devices",
        categoryId: "electronics_audio_devices",
        parentCategoryId: "electronics",
        level: 2
      },
      {
        name: "Cameras & Photography",
        categoryId: "electronics_cameras_photography",
        parentCategoryId: "electronics",
        level: 2
      },
      {
        name: "Wearable Devices",
        categoryId: "electronics_wearables",
        parentCategoryId: "electronics",
        level: 2
      },
      {
        name: "Home Appliances",
        categoryId: "electronics_home_appliances",
        parentCategoryId: "electronics",
        level: 2
      }
    ]
  },
  {
    name: "Multiservice",
    categoryId: "multiservice",
    level: 1,
    levelTwoCategory: [
      {
        name: "Document Services",
        categoryId: "ms_document_services",
        parentCategoryId: "multiservice",
        level: 2
      },
      {
        name: "Photo & Album Services",
        categoryId: "ms_photo_album_services",
        parentCategoryId: "multiservice",
        level: 2
      },
      {
        name: "Custom Design & Event Printing",
        categoryId: "ms_event_printing",
        parentCategoryId: "multiservice",
        level: 2
      },
      {
        name: "Custom Gift Printing",
        categoryId: "ms_gift_printing",
        parentCategoryId: "multiservice",
        level: 2
      }
    ]
  }
];
