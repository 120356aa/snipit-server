const users = [
  {
    id: 1,
    uuid: "sdf165s8d1fs6d98fsdf3",
    display_name: "Sn0w",
    image: "http://localhost:5000",
    about: "sjodifjsdf osdf josdfoi  sso dfoisf osdfo isdf sf soif s ",
    created_at: "10:50AM 03/15/20"
  },
  {
    id: 2,
    uuid: "sd6f1s84s98409sd4f9sd4",
    display_name: "Bob",
    image: "http://localhost:3000",
    about: "sdf;lgokaspofkpsafkpasdpf asdpfipasddpf p oasdfk poasdf kp",
    created_at: "11:00AM 05/22/20"
  }
];

const usersFollows = [
  {
    user_id: 1,
    followed_user_id: 2,
    view_status: 0,
    created_at: "11:50AM 03/16/20"
  },
  {
    user_id: 2,
    followed_user_id: 1,
    view_status: 1,
    created_at: "01:50PM 06/23/20"
  }
];

const usersSettings = [
  {
    user_id: 1,
    dark_mode: 1,
    expert_mode: 1,
    like_notifications: 1,
    comment_notifications: 1,
    follow_notifications: 1,
    ad_toggle: 0
  },
  {
    user_id: 2,
    dark_mode: 0,
    expert_mode: 0,
    like_notifications: 1,
    comment_notifications: 1,
    follow_notifications: 1,
    ad_toggle: 1
  }
];

module.exports = { 
  users,
  usersFollows,
  usersSettings,
};