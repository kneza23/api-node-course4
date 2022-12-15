import prisma from "../db";

export const getAllMarkers = async (req: any, res: any) => {
  const markers = await prisma.marker.findMany({
    include: { foundItUsers: false },
  });
  res.json({ data: markers });
};

export const getOneMarker = async (req: any, res: any) => {
  const marker = await prisma.marker.findFirst({
    where: {
      id: req.params.id,
    },
    include: { foundItUsers: false },
  });
  res.json({ data: marker });
};

export const addMarkerToUser = async (req: any, res: any) => {
  const marker = await prisma.marker.findFirst({
    where: {
      id: req.params.id,
    },
  });

  const updatedUser = await prisma.user.update({
    where: {
      id: req.user.id,
    },
    include: {
      foundMarkers: true,
    },
    data: {
      foundMarkers: { connect: { id: marker.id } },
    },
  });

  res.json({ data: updatedUser.foundMarkers });
};
