import fs from "fs";
import path from "path";
import XlsxPopulate from "xlsx-populate";

export async function GET() {
  try {
    console.log("🔹 Iniciando la lectura del archivo Excel...");

    // 1️⃣ Verificar si el archivo existe
    const filePath = path.resolve("public", "PROYECTO_FINIQUITO (1).xlsx");
    if (!fs.existsSync(filePath)) {
      console.error("❌ Archivo no encontrado:", filePath);
      return new Response(JSON.stringify({ error: "Archivo no encontrado" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 2️⃣ Leer el archivo Excel
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = await XlsxPopulate.fromDataAsync(fileBuffer);

    // 3️⃣ Modificar una celda (Ejemplo: Celda "A2")
    workbook.sheet(0).cell("A2").value("Nuevo Valor");

    // 4️⃣ Convertir el archivo modificado en un buffer
    const modifiedBuffer = await workbook.outputAsync();

    console.log("✅ Archivo modificado exitosamente.");

    // 5️⃣ Retornar el archivo como respuesta
    return new Response(modifiedBuffer, {
      headers: {
        "Content-Disposition": "attachment; filename=archivo_modificado.xlsx",
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("❌ Error en la API:", error);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const { diasVaca, formData, fechas, meses, fechaMes, fechaVacaciones, formData2, aguinaldo, dobleformData2, dobleaguinaldo } = await req.json();

    // 📌 Ruta del archivo original
    const filePath = path.resolve("public", "PROYECTO_FINIQUITO (1).xlsx");
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ error: "Archivo no encontrado" }), { status: 404 });
    }

    // 📌 Leer el archivo Excel
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = await XlsxPopulate.fromDataAsync(fileBuffer);
    const sheet = workbook.sheet(0); // Primera hoja

    // 📌 Modificar celdas con los datos recibidos
    sheet.cell("B3").value(formData.razonSocial);
    sheet.cell("B4").value(formData.domicilioEmpresa);
    sheet.cell("B5").value(formData.nombreTrabajador);
    sheet.cell("B6").value(formData.domicilioTrabajador);
    sheet.cell("B7").value(formData.estadoCivil);
    sheet.cell("B8").value(formData.fechaNacimiento);
    sheet.cell("B9").value(formData.profesion);
    sheet.cell("B10").value(formData.motivoRetiro);
    sheet.cell("B11").value(formData.remuneracionMensual);
    sheet.cell("B15").value(formData.fechaInicio);
    sheet.cell("B16").value(formData.fechaFin);

    // 📌 Modificar celdas de fechas y cálculos
    sheet.cell("C14").value(fechas.años);
    sheet.cell("C15").value(fechas.meses);
    sheet.cell("C16").value(fechas.días);

    // 📌 Modificar meses y promedios
    sheet.cell("C24").value(meses.mes1);
    sheet.cell("D24").value(meses.mes2);
    sheet.cell("E24").value(meses.mes3);

    // 📌 Modificar fechas de los meses
    sheet.cell("C23").value(fechaMes.fechaMes1);
    sheet.cell("D23").value(fechaMes.fechaMes2);
    sheet.cell("E23").value(fechaMes.fechaMes3);

    // 📌 Modificar vacaciones
    sheet.cell("B48").value(fechaVacaciones.inicio);
    sheet.cell("B49").value(fechaVacaciones.final);

    // 📌 Modificar aguinaldo y doble aguinaldo
    sheet.cell("C34").value(formData2.meses);
    sheet.cell("E34").value(formData2.dias);

    sheet.cell("C35").value(dobleformData2.meses);
    sheet.cell("E35").value(dobleformData2.dias);

    // 📌 Guardar el archivo en memoria
    const modifiedBuffer = await workbook.outputAsync();

    // 📌 Devolver el archivo Excel modificado
    return new Response(modifiedBuffer, {
      headers: {
        "Content-Disposition": "attachment; filename=archivo_modificado.xlsx",
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });

  } catch (error) {
    console.error("❌ Error en la API:", error);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), { status: 500 });
  }
}
