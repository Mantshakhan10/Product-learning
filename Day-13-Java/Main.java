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

        Applicant applicant1 = new Applicant("Mantsha", 50000);
        Applicant applicant2 = new Applicant("Aakash", 30000);
        Applicant applicant3 = new Applicant("Rahul", 70000);

        double threshold = 40000;

        System.out.println("Applicants above threshold:");

        if (applicant1.amount > threshold) {
            applicant1.display();
        }

        if (applicant2.amount > threshold) {
            applicant2.display();
        }

        if (applicant3.amount > threshold) {
            applicant3.display();
        }
    }
}