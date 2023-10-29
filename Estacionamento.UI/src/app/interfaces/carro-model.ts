export interface CarroModel {
    Marca: string;
    Modelo: string;
    Placa: string;
    HoraEntrada: Date;
    HoraSaida: Date | null;
    ValorPago: number;
}
