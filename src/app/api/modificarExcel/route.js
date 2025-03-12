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
    const { diasVaca, formData, fechas, meses, fechaMes, fechaVacaciones, formData2, aguinaldo, dobleformData2, dobleaguinaldo,fechasResultados,calculoVacaciones } = await req.json();

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
    sheet.range("V13:AL13").value(formData.razonSocial);
    sheet.range("AE14:AN14").value(formData.domicilioEmpresa);
    sheet.range("V15:AL15").value(formData.nombreTrabajador);
    sheet.range("AG16:AN16").value(formData.domicilioTrabajador);
    sheet.range("J16:T16").value(formData.estadoCivil);
    //sheet.cell("B8").value(formData.fechaNacimiento);
    sheet.range("N17:AL17").value(formData.profesion);
    sheet.range("K19:U19").value(formData.motivoRetiro);
    sheet.range("AJ19:AN19").value(formData.remuneracionMensual);
    sheet.range("W18:AA18").value(formData.fechaInicio);
    sheet.range("AJ18:AN18").value(formData.fechaFin);
    sheet.range("D18:M18").value(formData.cedula);
    sheet.range("Y16:Z16").value(formData.edad);

    // 📌 Modificar celdas de fechas y cálculos
    sheet.range("K20:O20").value(fechas.años);
    sheet.range("T20:W20").value(fechas.meses);
    sheet.range("AB20:AE20").value(fechas.días);
    // 📌 Modificar celdas de fechas y cálculos para vacaciones
    sheet.range("V36:X36").value(fechas.años);
    sheet.range("V37:X37").value(fechas.meses);
    sheet.range("V38:X38").value(fechas.días);
    // 📌 Modificar celdas de los calculos de los promedios año, mes y dia
    sheet.cell("AE36").value(Number(fechasResultados.añoResultado));
    sheet.cell("AE37").value(Number(fechasResultados.mesResultado));
    sheet.cell("AE38").value(Number(fechasResultados.diaResultado));
    // sheet.range("AK38:AN38").value(
    //   Number(fechasResultados.añoResultado) + 
    //   Number(fechasResultados.mesResultado) + 
    //   Number(fechasResultados.diaResultado)
    // );
    
    // 📌 Modificar meses y promedios
    sheet.range("P25:T25").value(meses.mes1);
    sheet.range("W25:AA25").value(meses.mes2);
    sheet.range("AD25:AH25").value(meses.mes3);
    sheet.range("AK25:AN25").value(meses.totales);
    sheet.range("AK33:AO33").value(meses.promedio);
    if(formData.motivoRetiro === "Forzoso"){
      sheet.cell("AK35").value(Number(meses.totales));
    }else{
      sheet.range("AK35:AN35").value(0);
      sheet.range("AA35:AH35").value("NO CORRESPONDE");
    }

    sheet.range("AK43:AN43").value(0);


    // 📌 Modificar fechas de los meses
    sheet.range("N24:T24").value(fechaMes.fechaMes1);
    sheet.range("U24:AA24").value(fechaMes.fechaMes2);
    sheet.range("AB24:AH24").value(fechaMes.fechaMes3);

    // // 📌 Modificar vacaciones (censurado por si las moscas XD)
    // sheet.cell("B48").value(fechaVacaciones.inicio);
    // sheet.cell("B49").value(fechaVacaciones.final);
    // sheet.cell("B49").value(diasVaca);

    // 📌 Modificar aguinaldo y doble aguinaldo
    sheet.range("V39:X39").value(formData2.meses);
    sheet.range("AC39:AE39").value(formData2.dias);
    sheet.cell("AK39").value(Number(aguinaldo));

    sheet.range("V40:X40").value(dobleformData2.meses);
    sheet.range("AC40:AE40").value(dobleformData2.dias);
    sheet.cell("AK40").value(Number(dobleaguinaldo));

    // Modificar el calculo de vacaciones
    sheet.range("AC41:AE41").value(calculoVacaciones.diasAcumulados);
    sheet.cell("AK41").value(Number(calculoVacaciones.vacacionesPorPagar));

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
