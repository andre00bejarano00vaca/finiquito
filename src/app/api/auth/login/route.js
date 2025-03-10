import { NextResponse } from "next/server";

export async function POST(req) {
  const contras = ["hola", "mundo", "como"];
  const body = await req.json(); // Parsear correctamente el body
  const { contra } = body;

  if (!contra) {
    return NextResponse.json({ message: "❌ Falta la contraseña" }, { status: 400 });
  }

  if (contras.includes(contra)) {
    const response = NextResponse.json({ message: "✅ Contraseña correcta" }, { status: 200 });

    // Configurar la cookie de autenticación
    response.headers.set(
      "Set-Cookie",
      `auth=${contra}; Path=/; Max-Age=3600; HttpOnly; Secure; SameSite=Strict`
    );

    return response;
  } else {
    return NextResponse.json({ message: "❌ Contraseña incorrecta" }, { status: 401 });
  }
}
