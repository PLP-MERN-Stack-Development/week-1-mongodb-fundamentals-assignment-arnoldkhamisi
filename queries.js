db["books"].find()
use plp_bookstore
//insert at least 10 book documents into your collection
db.books.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 35,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 40,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 25,
    in_stock: true,
    pages: 310,
    publisher: "Allen & Unwin"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 30,
    in_stock: false,
    pages: 223,
    publisher: "Bloomsbury"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 20,
    in_stock: true,
    pages: 320,
    publisher: "Penguin"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 28,
    in_stock: true,
    pages: 499,
    publisher: "Farrar, Straus and Giroux"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 22,
    in_stock: false,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 18,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 30,
    in_stock: true,
    pages: 443,
    publisher: "Harvill Secker"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 19,
    in_stock: false,
    pages: 277,
    publisher: "Little, Brown and Company"
  }
])
switched to db plp_bookstore
use plp_bookstore

db.books.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 35,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 40,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 25,
    in_stock: true,
    pages: 310,
    publisher: "Allen & Unwin"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 30,
    in_stock: false,
    pages: 223,
    publisher: "Bloomsbury"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 20,
    in_stock: true,
    pages: 320,
    publisher: "Penguin"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 28,
    in_stock: true,
    pages: 499,
    publisher: "Farrar, Straus and Giroux"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 22,
    in_stock: false,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 18,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 30,
    in_stock: true,
    pages: 443,
    publisher: "Harvill Secker"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 19,
    in_stock: false,
    pages: 277,
    publisher: "Little, Brown and Company"
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('683d7dad1ea1c67bd95264bb'),
    '1': ObjectId('683d7dad1ea1c67bd95264bc'),
    '2': ObjectId('683d7dad1ea1c67bd95264bd'),
    '3': ObjectId('683d7dad1ea1c67bd95264be'),
    '4': ObjectId('683d7dad1ea1c67bd95264bf'),
    '5': ObjectId('683d7dad1ea1c67bd95264c0'),
    '6': ObjectId('683d7dad1ea1c67bd95264c1'),
    '7': ObjectId('683d7dad1ea1c67bd95264c2'),
    '8': ObjectId('683d7dad1ea1c67bd95264c3'),
    '9': ObjectId('683d7dad1ea1c67bd95264c4')
  }
}
//Find all books in a specific genre
db.books.find({ genre: "Fantasy" })
{
  _id: ObjectId('683d7dad1ea1c67bd95264bd'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 25,
  in_stock: true,
  pages: 310,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264be'),
  title: "Harry Potter and the Philosopher's Stone",
  author: 'J.K. Rowling',
  genre: 'Fantasy',
  published_year: 1997,
  price: 30,
  in_stock: false,
  pages: 223,
  publisher: 'Bloomsbury'
}
//Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })
{
  _id: ObjectId('683d7dad1ea1c67bd95264bf'),
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-help',
  published_year: 2018,
  price: 20,
  in_stock: true,
  pages: 320,
  publisher: 'Penguin'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c0'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c3'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: 'History',
  published_year: 2011,
  price: 30,
  in_stock: true,
  pages: 443,
  publisher: 'Harvill Secker'
}
//Find books by a specific author
db.books.find({ author: "J.K. Rowling" })
{
  _id: ObjectId('683d7dad1ea1c67bd95264be'),
  title: "Harry Potter and the Philosopher's Stone",
  author: 'J.K. Rowling',
  genre: 'Fantasy',
  published_year: 1997,
  price: 30,
  in_stock: false,
  pages: 223,
  publisher: 'Bloomsbury'
}
//Update the price of a specific book
db.books.updateOne(
  { title: "Clean Code" },
  { $set: { price: 39 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
//Delete a book by its title
db.books.deleteOne({ title: "1984" })
{
  acknowledged: true,
  deletedCount: 1
}
//Write a query to find books that are both in stock and published after 2010
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } }
)
{
  _id: ObjectId('683d7dad1ea1c67bd95264bf'),
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-help',
  published_year: 2018,
  price: 20,
  in_stock: true,
  pages: 320,
  publisher: 'Penguin'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c0'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c3'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: 'History',
  published_year: 2011,
  price: 30,
  in_stock: true,
  pages: 443,
  publisher: 'Harvill Secker'
}
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
)
{
  title: 'Atomic Habits',
  author: 'James Clear',
  price: 20
}
{
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  price: 28
}
{
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  price: 30
}
db.books.find().sort({ price: 1 })
{
  _id: ObjectId('683d7dad1ea1c67bd95264c4'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 19,
  in_stock: false,
  pages: 277,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bf'),
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-help',
  published_year: 2018,
  price: 20,
  in_stock: true,
  pages: 320,
  publisher: 'Penguin'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c1'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 22,
  in_stock: false,
  pages: 281,
  publisher: 'J.B. Lippincott & Co.'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bd'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 25,
  in_stock: true,
  pages: 310,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c0'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264be'),
  title: "Harry Potter and the Philosopher's Stone",
  author: 'J.K. Rowling',
  genre: 'Fantasy',
  published_year: 1997,
  price: 30,
  in_stock: false,
  pages: 223,
  publisher: 'Bloomsbury'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c3'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: 'History',
  published_year: 2011,
  price: 30,
  in_stock: true,
  pages: 443,
  publisher: 'Harvill Secker'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bb'),
  title: 'Clean Code',
  author: 'Robert C. Martin',
  genre: 'Programming',
  published_year: 2008,
  price: 39,
  in_stock: true,
  pages: 464,
  publisher: 'Prentice Hall'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bc'),
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  genre: 'Programming',
  published_year: 1999,
  price: 40,
  in_stock: true,
  pages: 352,
  publisher: 'Addison-Wesley'
}
db.books.find().sort({ price: -1 })
{
  _id: ObjectId('683d7dad1ea1c67bd95264bc'),
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  genre: 'Programming',
  published_year: 1999,
  price: 40,
  in_stock: true,
  pages: 352,
  publisher: 'Addison-Wesley'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bb'),
  title: 'Clean Code',
  author: 'Robert C. Martin',
  genre: 'Programming',
  published_year: 2008,
  price: 39,
  in_stock: true,
  pages: 464,
  publisher: 'Prentice Hall'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264be'),
  title: "Harry Potter and the Philosopher's Stone",
  author: 'J.K. Rowling',
  genre: 'Fantasy',
  published_year: 1997,
  price: 30,
  in_stock: false,
  pages: 223,
  publisher: 'Bloomsbury'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c3'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: 'History',
  published_year: 2011,
  price: 30,
  in_stock: true,
  pages: 443,
  publisher: 'Harvill Secker'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c0'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bd'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 25,
  in_stock: true,
  pages: 310,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c1'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 22,
  in_stock: false,
  pages: 281,
  publisher: 'J.B. Lippincott & Co.'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bf'),
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-help',
  published_year: 2018,
  price: 20,
  in_stock: true,
  pages: 320,
  publisher: 'Penguin'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c4'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 19,
  in_stock: false,
  pages: 277,
  publisher: 'Little, Brown and Company'
}
db.books.find().skip(0).limit(5)
{
  _id: ObjectId('683d7dad1ea1c67bd95264bb'),
  title: 'Clean Code',
  author: 'Robert C. Martin',
  genre: 'Programming',
  published_year: 2008,
  price: 39,
  in_stock: true,
  pages: 464,
  publisher: 'Prentice Hall'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bc'),
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  genre: 'Programming',
  published_year: 1999,
  price: 40,
  in_stock: true,
  pages: 352,
  publisher: 'Addison-Wesley'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bd'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 25,
  in_stock: true,
  pages: 310,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264be'),
  title: "Harry Potter and the Philosopher's Stone",
  author: 'J.K. Rowling',
  genre: 'Fantasy',
  published_year: 1997,
  price: 30,
  in_stock: false,
  pages: 223,
  publisher: 'Bloomsbury'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264bf'),
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-help',
  published_year: 2018,
  price: 20,
  in_stock: true,
  pages: 320,
  publisher: 'Penguin'
}
db.books.find().skip(5).limit(5)
{
  _id: ObjectId('683d7dad1ea1c67bd95264c0'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c1'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 22,
  in_stock: false,
  pages: 281,
  publisher: 'J.B. Lippincott & Co.'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c3'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: 'History',
  published_year: 2011,
  price: 30,
  in_stock: true,
  pages: 443,
  publisher: 'Harvill Secker'
}
{
  _id: ObjectId('683d7dad1ea1c67bd95264c4'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 19,
  in_stock: false,
  pages: 277,
  publisher: 'Little, Brown and Company'
}
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])
{
  _id: 'Programming',
  averagePrice: 39.5
}
{
  _id: 'Psychology',
  averagePrice: 28
}
{
  _id: 'Fantasy',
  averagePrice: 27.5
}
{
  _id: 'Fiction',
  averagePrice: 20.5
}
{
  _id: 'History',
  averagePrice: 30
}
{
  _id: 'Self-help',
  averagePrice: 20
}
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])
{
  _id: 'Robert C. Martin',
  totalBooks: 1
}
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])
{
  _id: '1930s',
  count: 1
}
{
  _id: '1950s',
  count: 1
}
{
  _id: '1960s',
  count: 1
}
{
  _id: '1990s',
  count: 2
}
{
  _id: '2000s',
  count: 1
}
{
  _id: '2010s',
  count: 3
}
db.books.createIndex({ title: 1 })
title_1
db.books.createIndex({ author: 1, published_year: -1 })
author_1_published_year_-1
db.books.find({ title: "Clean Code" }).explain("executionStats")
{
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: {
          title: 1
        },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: {
          title: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          title: [
            '["Clean Code", "Clean Code"]'
          ]
        },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'B6C1D6F79AAA979584A9BA83C2F8D87C839BED87CAE10CD5F0AE5B89BCE86C6B',
  command: {
    find: 'books',
    filter: {
      title: 'Clean Code'
    },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'SCHWARTZ-705',
    port: 27017,
    version: '8.0.9',
    gitVersion: 'f882ef816d531ecfbb593843e4c554fda90ca416'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}
db.books.find({ author: "J.K. Rowling", published_year: 1997 }).explain("executionStats")
{
          published_year: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          author: [
            '["J.K. Rowling", "J.K. Rowling"]'
          ],
          published_year: [
            '[1997, 1997]'
          ]
        },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'C723A03D914E8AB15A4F6B8E72C2E158CA114F3B9A50FE012146C9F2E0CF9962',
  command: {
    find: 'books',
    filter: {
      author: 'J.K. Rowling',
      published_year: 1997
    },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'SCHWARTZ-705',
    port: 27017,
    version: '8.0.9',
    gitVersion: 'f882ef816d531ecfbb593843e4c554fda90ca416'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}
plp_bookstore

