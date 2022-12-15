/*
  Warnings:

  - You are about to drop the column `userId` on the `Marker` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Marker" DROP CONSTRAINT "Marker_userId_fkey";

-- AlterTable
ALTER TABLE "Marker" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_MarkerToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MarkerToUser_AB_unique" ON "_MarkerToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MarkerToUser_B_index" ON "_MarkerToUser"("B");

-- AddForeignKey
ALTER TABLE "_MarkerToUser" ADD CONSTRAINT "_MarkerToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Marker"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MarkerToUser" ADD CONSTRAINT "_MarkerToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
