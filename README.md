# flamingojava

package atividade;

import java.util.Scanner;

public class Exercicio02 {
	public static void main(String[] args) {
		 
		Scanner sc = new Scanner(System.in);
		
		System.out.println("digite a base");
		float base =sc.nextFloat();
		
		 System.out.println("digite a altura  ");
		 float altura = sc.nextFloat();
		 
		 float area= base*altura/2;
		System.out.println("a multiplicacao da base* a altura é: "+area);
		sc.close();
		

	}

}
