import { PrismaClient } from '@prisma/client';
import { SearchUI } from './SearchUI';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function SearchPage() {
  const pandits = await prisma.panditProfile.findMany({
    where: {
      isVerified: true,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        }
      },
      services: true,
    }
  });

  return <SearchUI initialPandits={pandits} />;
}
