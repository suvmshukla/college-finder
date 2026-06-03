import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "NIT Jamshedpur",
        location: "Jharkhand",
        fees: 120000,
        rating: 4.5,
        description: "Top engineering institute in Jharkhand"
      },
      {
        name: "BIT Mesra",
        location: "Ranchi",
        fees: 200000,
        rating: 4.3,
        description: "Famous private engineering institute"
      },
      {
        name: "IIT Patna",
        location: "Bihar",
        fees: 150000,
        rating: 4.8,
        description: "Premier IIT in Bihar"
      }
    ]
  });

  console.log("Data Inserted Successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());