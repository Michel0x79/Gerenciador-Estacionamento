public class Carro
{
    public string Marca { get; set; }
    public string Modelo { get; set; }
    public string Placa { get; set; }
    public DateTime HoraEntrada { get; set; }
    public DateTime? HoraSaida { get; set; }
    public double ValorPago { get; set; }

    public Carro(string marca, string modelo, string placa, DateTime horaEntrada)
    {
        Marca = marca;
        Modelo = modelo;
        Placa = placa;
        HoraEntrada = horaEntrada;
    }
}