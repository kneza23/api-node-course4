/*
  Warnings:

  - You are about to drop the `_MarkerToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MarkerToUser" DROP CONSTRAINT "_MarkerToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_MarkerToUser" DROP CONSTRAINT "_MarkerToUser_B_fkey";

-- AlterTable
ALTER TABLE "Marker" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "_MarkerToUser";

-- AddForeignKey
ALTER TABLE "Marker" ADD CONSTRAINT "Marker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
