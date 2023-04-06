using System.ComponentModel.Design;
using System.Runtime.CompilerServices;

namespace Task_Class
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //-------------------------------------------//
            Student Person = new Student("Albert", "Hajiverdiyev", "559a", 50);

            Person.GetInfo();
            Person.CheckGraduation();
            Person.GetDiplomDegree();
        }
        class Student
        {
            public string Name;
            public string Surname;
            public string Group;
            public int Point;
            public bool IsGraduated;
            public Student(string name, string surname, string group, int point)
            {
                Name = name;
                Surname = surname;
                Group = group;
                Point = point;
                if (point >= 65 && point <= 100)
                {
                    IsGraduated = true;
                }
            }
            public void GetInfo()
            {
                Console.WriteLine($"Name: {Name}");
                Console.WriteLine($"Surname: {Surname}");
                Console.WriteLine($"Group: {Group}");
                Console.WriteLine($"Umumi Bali: {Point}");
            }
            public void CheckGraduation()
            {
                if (IsGraduated == true) { Console.WriteLine("Bu Telebe Mezun Olub"); }
                else if (IsGraduated == false) { Console.WriteLine("AHAhhAHAH Mezul Ola Bilmeyib"); }
            }
            public void GetDiplomDegree()
            {
                if (Point <= 65)
                {
                    Console.WriteLine($"Mezun Ola Bilmeyib!!! Chunki Umumi Bali {Point}-dir");

                }
                else if (Point > 65 && Point <= 80)
                {
                    Console.WriteLine($"Diplomu Adi Diplomdur. Chunki Umumi Bali {Point}-dir");
                }
                else if (Point <= 90 && Point > 80)
                {
                    Console.WriteLine($"Diplomu Sheref Diplomudur. Chunki Umumi Bali {Point}-dir");
                }
                else { Console.WriteLine($"Diplomu Yuksek Sheref Diplomudur. Chunki Umumi Bali {Point}-dir"); }
            }

        }
    }
}