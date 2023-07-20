import { rest } from "msw";

const baseURL = "https://drf-api-crafthub-d1d89ee1951b.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json(
        {
          pk: 2,
          username: "Admin",
          email: "",
          first_name: "",
          last_name: "",
          profile_id: 2,
          profile_image: "https://res.cloudinary.com/dmuamkwfw/image/upload/v1/media/images/DSC_7576_2_pomtm3"
        })
      );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];