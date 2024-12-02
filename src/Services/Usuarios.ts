import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Usuarios } from './indes.D';

export const UsuariosPai = createApi({
    reducerPath: 'usuarios',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    endpoints: (builder) => ({
        getusuarios: builder.query<Usuarios[], any>({
            query: () => ({
                url: "/alldata",
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJnb2siLCJkbmkiOjc0ODIwMzIxLCJhdmF0YXIiOiJTdGV2aWEiLCJyb2xlaWQiOiJhZG1pbiIsImlhdCI6MTczMTUwNTI5MH0.oMsNngTMlS6i5Rot0yONiZC3fDp_gAsoULKpcep5QRc`,
                    'Content-Type': 'application/json',
                }
            })
        }),
        addPost: builder.mutation({
            query: (nuevousuario: Usuarios | FormData) => ({
                url: "/usuario",
                method: "POST",
                body: nuevousuario,
            })
        })
    })
})

export const { useGetusuariosQuery, useAddPostMutation } = UsuariosPai

