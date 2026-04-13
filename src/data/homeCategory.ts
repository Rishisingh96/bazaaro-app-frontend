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
    ],
  },

  {
    name: "Women", 
    CategoryId: "women",
    level:1,
    levelTowCategory:[
        {
            "parentCategoryId":"women",
            "level":2,
            "name":"India & fusion Wear",
            "categoryId": "women_indian_and_fusion_wear"
        },
        {
            
            "parentCategoryId":"women",
            "level":2,
            "name":"western wear",
            "categoryId": "women_western_wear"
        }
    ]
  },

  {
    name:"Home & Furniture",
    categoryId: "home_furniture",
    level:1,
  },

  {
    name:"Electronics", CategoryId: "electronics", level:1
  },
];
