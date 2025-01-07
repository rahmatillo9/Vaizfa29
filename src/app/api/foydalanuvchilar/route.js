export async function GET() {
    const data = [
  { "id": 1, "name": "Ahmad", "yoshi": 24, "kasbi": "Dasturchi", "tajribasi": 5 },
  { "id": 2, "name": "Ali", "yoshi": 24, "kasbi": "Bankir", "tajribasi": 2 }
]
  
    return new Response(JSON.stringify(data), {
      
      headers: { "Content-Type": "application/json" },
    });
  }
  
