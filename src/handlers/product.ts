// import prisma from "../db";

// export const getProducts = async (req: any, res: any) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: req.user.id,
//     },
//     include: {
//       products: true,
//     },
//   });

//   res.json({ data: user?.products });
// };

// export const getOneProduct = async (req: any, res: any) => {
//   const product = await prisma.product.findFirst({
//     where: {
//       id: req.params.id,
//       belongsTo: req.user.id,
//     },
//   });

//   res.json({ data: product });
// };

// export const createProduct = async (req: any, res: any, next: any) => {
//   try {
//     const product = await prisma.product.create({
//       data: {
//         name: req.body.name,
//         belongsToId: req.user.id,
//       },
//     });
//     res.json({ data: product });
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateProduct = async (req: any, res: any) => {
//   const product = await prisma.product.update({
//     where: {
//       id_belongsToId: {
//         id: req.params.id,
//         belongsToId: req.user.id,
//       },
//     },
//     data: {
//       name: req.body.name,
//     },
//   });
//   res.json({ data: product });
// };

// export const deleteProduct = async (req: any, res: any) => {
//   const product = await prisma.product.delete({
//     where: {
//       id_belongsToId: {
//         id: req.params.id,
//         belongsToId: req.user.id,
//       },
//     },
//   });
//   res.json({ data: product });
// };
