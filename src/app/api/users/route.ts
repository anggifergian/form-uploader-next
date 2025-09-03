import { NextResponse } from 'next/server';

export function GET() {
  const users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: '123 Main St, New York, NY 10001',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      address: '456 Oak Ave, Los Angeles, CA 90210',
    },
    {
      id: 3,
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob.johnson@example.com',
      address: '789 Pine Rd, Chicago, IL 60601',
    },
    {
      id: 4,
      firstName: 'Alice',
      lastName: 'Brown',
      email: 'alice.brown@example.com',
      address: '321 Elm St, Houston, TX 77001',
    },
    {
      id: 5,
      firstName: 'Michael',
      lastName: 'Wilson',
      email: 'michael.wilson@example.com',
      address: '654 Maple Dr, Phoenix, AZ 85001',
    },
    {
      id: 6,
      firstName: 'Sarah',
      lastName: 'Davis',
      email: 'sarah.davis@example.com',
      address: '987 Cedar Ln, Philadelphia, PA 19101',
    },
    {
      id: 7,
      firstName: 'David',
      lastName: 'Miller',
      email: 'david.miller@example.com',
      address: '147 Birch Way, San Antonio, TX 78201',
    },
    {
      id: 8,
      firstName: 'Emily',
      lastName: 'Garcia',
      email: 'emily.garcia@example.com',
      address: '258 Spruce St, San Diego, CA 92101',
    },
  ];

  return NextResponse.json(users, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
