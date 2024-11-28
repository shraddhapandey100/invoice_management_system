from rest_framework import viewsets
from .models import Invoice
from .serializers import InvoiceSerializer

class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all().order_by('-date')
    serializer_class = InvoiceSerializer
