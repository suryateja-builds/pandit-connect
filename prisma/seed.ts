import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clean up existing data
  await prisma.review.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.service.deleteMany()
  await prisma.panditProfile.deleteMany()
  await prisma.user.deleteMany()

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      name: 'Ravi Kumar',
      email: 'ravi@example.com',
      role: 'USER',
    },
  })

  // Create Pandits
  const pandit1User = await prisma.user.create({
    data: {
      name: 'Pt. Sharma Ji',
      email: 'sharma@panditconnect.com',
      role: 'PANDIT',
      image: 'https://images.unsplash.com/photo-1544168190-79c15427015f?auto=format&fit=crop&q=80&w=200&h=200',
    },
  })

  const pandit1 = await prisma.panditProfile.create({
    data: {
      userId: pandit1User.id,
      bio: 'Experienced Vedic Pandit with 15+ years of performing authentic rituals.',
      experienceYrs: 15,
      languages: 'Hindi, Sanskrit, English',
      location: 'Delhi NCR',
      isVerified: true,
      hourlyRate: 1500,
      rating: 4.8,
      services: {
        create: [
          { name: 'Griha Pravesh', description: 'Complete house warming ceremony with Vastu Shanti.', basePrice: 5000 },
          { name: 'Satyanarayan Katha', description: 'Auspicious pooja for family wellbeing.', basePrice: 2100 }
        ]
      }
    }
  })

  const pandit2User = await prisma.user.create({
    data: {
      name: 'Pt. Venkatesh',
      email: 'venkatesh@panditconnect.com',
      role: 'PANDIT',
      image: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=200&h=200',
    },
  })

  const pandit2 = await prisma.panditProfile.create({
    data: {
      userId: pandit2User.id,
      bio: 'South Indian priest specializing in traditional Telugu and Tamil weddings.',
      experienceYrs: 10,
      languages: 'Telugu, Tamil, English',
      location: 'Hyderabad',
      isVerified: true,
      hourlyRate: 2000,
      rating: 4.9,
      services: {
        create: [
          { name: 'Marriage Ceremony', description: 'Traditional South Indian wedding rituals.', basePrice: 25000 },
          { name: 'Namakaranam', description: 'Baby naming ceremony.', basePrice: 3000 }
        ]
      }
    }
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
