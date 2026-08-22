import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

class Applicant {

    String name;
    double amount;

    Applicant(String name, double amount) {
        this.name = name;
        this.amount = amount;
    }

    void display() {
        System.out.println(name + " - " + amount);
    }
}

public class Main {

    public static void main(String[] args) {

        String fileName = "applicants.csv";

        try (BufferedReader reader =
                     new BufferedReader(new FileReader(fileName))) {

            String line;

            // Skip header
            reader.readLine();

            while ((line = reader.readLine()) != null) {

                try {

                    String[] parts = line.split(",");

                    if (parts.length != 2) {
                        throw new IllegalArgumentException(
                            "Invalid format"
                        );
                    }

                    String name = parts[0].trim();
                    double amount =
                        Double.parseDouble(parts[1].trim());

                    Applicant applicant =
                        new Applicant(name, amount);

                    applicant.display();

                } catch (Exception e) {

                    System.out.println(
                        "Skipped bad line: " + line
                    );
                }
            }

        } catch (IOException e) {

            System.out.println(
                "Could not read file: " + e.getMessage()
            );
        }
    }
}