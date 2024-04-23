import random
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

two_digit_numbers = [num for num in range(10, 100)]
three_digit_numbers = [num for num in range(100, 1000)]
four_digit_numbers = [num for num in range(1000, 10000)]
five_digit_numbers = [num for num in range(10000, 100000)]

digits = int(input('Digits Sir? :'))
rows = int(input('Rows Sir? :'))

result_list = []

def create_pdf_with_numbers(numbers, filename):
    # Create a PDF canvas
    c = canvas.Canvas(filename, pagesize=letter)

    # Set font and font size
    c.setFont("Helvetica", 12)

    # Set starting position for text insertion
    x_position = 100  # Adjust the x-coordinate for column position
    y_position = 700  # Adjust the starting y-coordinate
    line_height = 20  # Adjust the height between lines

    # Insert numbers as text in a column
    for number in numbers:
        if number < 0:
            c.drawString(x_position, y_position, str(number))  # Draw negative numbers as they are
        else:
            # Shift positive numbers slightly to the right for alignment
            c.drawString(x_position + 4, y_position, str(number))
        y_position -= line_height  # Move to the next line

    # Save the PDF
    c.save()


def number():
    sign = random.choices([-1, 1], weights=[0.25, 0.75])[0]
    if digits == 2:
        num = random.choice(two_digit_numbers) * sign
    elif digits == 3:
        num = random.choice(three_digit_numbers) * sign
    elif digits == 4:
        num = random.choice(four_digit_numbers) * sign
    elif digits == 5:
        num = random.choice(five_digit_numbers) * sign

    return num
def generateQ():
    result_list = []
    for _ in range(rows):
        result = number()  # Call the function
        result_list.append(result)


output_filename = "output.pdf"


create_pdf_with_numbers(result_list, output_filename)
